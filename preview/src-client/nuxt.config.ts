export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: { preset: import.meta.resolveSync('elysiajs-nuxt/preset') },
  vite: { server: { origin: 'localhost:3000' } },
  runtimeConfig: {
    // same server -> 'http://localhost:port', different server -> 'https://your.domain.com'
    fetchTarget: 'http://localhost:5566',
    // same origin -> '', different origin -> 'https://your.domain.com'
    public: { fetchTarget: '' }
  }
})
