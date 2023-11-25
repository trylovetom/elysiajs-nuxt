export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: { preset: import.meta.resolveSync('elysiajs-nuxt/preset') },
  vite: { server: { origin: 'localhost:3000', cors: true } },
  devServer: { host: 'localhost', port: 3000 }
})
