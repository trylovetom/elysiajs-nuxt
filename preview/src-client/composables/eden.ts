import { edenFetch } from '@elysiajs/eden'
import { type Application } from '../../src-server'

async function unwrapper<Data>(
  req: Promise<{ data: Data; error: unknown }>
): Promise<Data> | never {
  const res = await req

  if (res.error) {
    throw res.error
  }

  return res.data
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

  return pipeline(edenFetch<Application>(fetchTarget), unwrapper)
}
