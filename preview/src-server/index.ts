import { Elysia } from 'elysia'
import elysiaNuxt from 'elysiajs-nuxt'

const application = new Elysia()
  .onStart(function onStart({ app }) {
    const startAt = new Date()
    console.info(
      `[${import.meta.file}]: server started at ${startAt.toISOString()} (${app
        .server?.hostname}:${app.server?.port}).`
    )
  })
  .onStop(function onStop() {
    const startAt = new Date()
    console.info(
      `[${import.meta.file}]: server stop at ${startAt.toISOString()}.`
    )
  })
  .use(elysiaNuxt)
  .get('/api/message', () => 'THIS IS THE WAY!')
  .listen(5566)

export type Application = typeof application
