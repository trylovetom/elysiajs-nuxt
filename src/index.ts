import { Elysia } from 'elysia'
import { NitroApp } from 'nitropack'
import { defineNuxtConfig } from 'nuxt/config'
import { type NuxtConfig } from 'nuxt/schema'

global.defineNuxtConfig = defineNuxtConfig

const isProduction = process.env.NODE_ENV === 'production'
const nuxtConfigPath = `${process.cwd()}/nuxt.config.ts`
const nuxtConfig: NuxtConfig = import.meta.require(nuxtConfigPath)?.default
const origin = nuxtConfig.vite?.server?.origin

export default new Elysia().all('*', async function nuxt({ request }) {
  if (isProduction) {
    const outputPath = `${process.cwd()}/.output/server/index.mjs`
    const nitroApp: NitroApp = import.meta.require(outputPath)?.default
    const url = new URL(request.url)

    let body
    if (request.body) {
      body = await request.arrayBuffer()
    }

    return nitroApp.localFetch(url.pathname + url.search, {
      host: url.hostname,
      protocol: url.protocol,
      headers: request.headers,
      method: request.method,
      redirect: request.redirect,
      body
    })
  }

  // isDev

  if (!origin) {
    throw new Error(`Cannot find origin from "${nuxtConfigPath}"`)
  }

  // forward the request
  const url = new URL(request.url)
  url.host = origin

  const req = new Request(url.toString(), request)
  req.headers.set('host', url.host)
  req.headers.set('origin', url.origin)

  const res = await fetch(req)

  if (!res.headers.get('content-type')?.includes('text/html')) {
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
