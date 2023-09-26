export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: { preset: require.resolve('elysiajs-nuxt/preset') },
  vite: { server: { origin: 'localhost:3000' } }
})
