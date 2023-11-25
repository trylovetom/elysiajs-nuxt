import { Elysia } from 'elysia'
import { NitroApp } from 'nitropack'
import { defineNuxtConfig } from 'nuxt/config'
import { type NuxtConfig } from 'nuxt/schema'

const nitroAppGlob = new Bun.Glob('**/.output/server/index.mjs')
const nitroAppPath = nitroAppGlob
  .scanSync({ absolute: true, dot: true })
  .next().value

const nuxtConfigGlob = new Bun.Glob('**/nuxt.config.ts')
const nuxtConfigPath = nuxtConfigGlob.scanSync({ absolute: true }).next().value

export default new Elysia().all('*', async function nuxt({ request, set }) {
  // isProduction
  if (process.env.NODE_ENV === 'production') {
    const nitroApp: NitroApp = import.meta.require(nitroAppPath)?.default

    if (!nitroApp) {
      throw new Error(`Can't find the nitroApp from "${nitroAppPath}"`)
    }

    let body

    if (request.body) {
      body = await request.arrayBuffer()
    }

    const url = new URL(request.url)

    return nitroApp.localFetch(url.pathname + url.search, {
      host: url.hostname,
      protocol: url.protocol,
      headers: request.headers,
      method: request.method,
      redirect: request.redirect,
      body
    })
  }

  // isDevelopment
  global.defineNuxtConfig = defineNuxtConfig

  const nuxtConfig: NuxtConfig = import.meta.require(nuxtConfigPath)?.default
  const origin = nuxtConfig.vite?.server?.origin

  if (!origin) {
    throw new Error(`Can't find the origin from "${nuxtConfigPath}"`)
  }

  // forward the request
  const url = new URL(request.url)
  url.host = origin

  if (url.pathname === '/@vite/client') {
    url.pathname = '/_nuxt/@vite/client'
  }

  if (url.pathname.includes('/@vite/client')) {
    set.redirect = url.toString()
    return
  }

  const req = new Request(url.toString(), request)
  req.headers.set('host', url.host)
  req.headers.set('origin', url.origin)

  const res = await fetch(req)

  if (!res.ok || !res.headers.get('content-type')?.includes('text/html')) {
    return res
  }

  // modify the origin
  const html = (await res.text())
    .replaceAll('src="/_nuxt', `src="http://${origin}/_nuxt`)
    .replaceAll('href="/_nuxt', `href="http://${origin}/_nuxt`)
    .replaceAll('src="/__nuxt', `src="http://${origin}/__nuxt`)
    .replaceAll('href="/__nuxt', `href="http://${origin}/__nuxt`)

  return new Response(html, res)
})
