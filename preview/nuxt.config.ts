export default defineNuxtConfig({
  srcDir: 'src-client',
  devtools: { enabled: true },
  nitro: { preset: import.meta.resolveSync('elysiajs-nuxt/preset') },
  vite: { server: { origin: 'localhost:3000' } }
})
