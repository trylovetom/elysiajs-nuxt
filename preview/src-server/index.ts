import { Elysia } from 'elysia'
import elysiaNuxt from 'elysiajs-nuxt'

const detail = `[${import.meta.file}]:`
const application = new Elysia()
  .onStart(function onStart({ server }) {
    const startAt = new Date()
    console.info(
      `${detail} server started at ${startAt.toISOString()} (${server?.url}).`
    )
  })
  .onStop(function onStop() {
    const startAt = new Date()
    console.info(`${detail} server stop at ${startAt.toISOString()}.`)
  })
  .use(elysiaNuxt)
  .get('/api/message', () => ({ message: 'THIS IS THE WAY!' }))
  .listen(5566)

export type Application = typeof application
