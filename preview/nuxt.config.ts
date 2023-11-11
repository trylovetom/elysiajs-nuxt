export default defineNuxtConfig({
  srcDir: 'src-client',
  devtools: { enabled: true },
  nitro: { preset: require.resolve('elysiajs-nuxt/preset') },
  vite: { server: { origin: 'localhost:3000' } }
})
