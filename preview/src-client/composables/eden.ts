import { edenTreaty, edenFetch } from '@elysiajs/eden'
import { type Application } from '../../src-server'

async function handleEdenRes<Data>(
  req: Promise<{ data: Data; error: unknown }>
): Promise<Data> | never {
  const res = await req

  console.log('asdf', res)

  if (res.error) {
    throw res.error
  }

  return res.data
}

// eden treaty
type HandledEdenTreaty<EdenTreaty> = {
  [Property in keyof EdenTreaty]: EdenTreaty[Property] extends (
    ...args: infer Args
  ) => infer Return
    ? Return extends Promise<{ data: unknown }>
      ? (...args: Args) => Promise<Awaited<Return>['data']>
      : (...args: Args) => Return
    : HandledEdenTreaty<EdenTreaty[Property]>
}

export function useEdenTreaty() {
  const config = useRuntimeConfig()
  const fetchTarget = process.server
    ? config.fetchTarget
    : config.public.fetchTarget
  const client = edenTreaty<Application>(fetchTarget)

  type Client = HandledEdenTreaty<typeof client>

  const proxyIt = (obj: object): Client =>
    new Proxy(obj, {
      get(target: any, prop) {
        const property = target[prop]
        console.log(prop, property, typeof property)
        if (typeof property === 'function') {
          return (...args: any[]) => handleEdenRes(property.apply(target, args))
        } else if (
          (typeof property === 'object' && property !== null) ||
          prop === 'api'
        ) {
          return proxyIt(property) // Recurse for nested objects
        }
        return property
      }
    }) as Client

  return proxyIt(client)
}

// eden fetch
function pipeline<A extends unknown[], B, C>(
  fn1: (...args: A) => B,
  fn2: (b: B) => C
): (...args: A) => C {
  return (...args: A): C => fn2(fn1(...args))
}

export const useEdenFetch = () => {
  const config = useRuntimeConfig()
  const fetchTarget = process.server
    ? config.fetchTarget
    : config.public.fetchTarget

  return pipeline(edenFetch<Application>(fetchTarget), handleEdenRes)
}
