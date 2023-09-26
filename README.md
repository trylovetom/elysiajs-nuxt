# elysiajs-nuxt

> Easily integrate elysia with nuxt, now supporting @nuxt/devtools!

## Usage

### Development Environment

1. install packages

```sh
# currently only supports Bun
bun add elysiajs-nuxt
bun add nuxt elysia --dev
```

2. configure nuxt.config.ts

```ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  // mandatory configuration!
  nitro: { preset: require.resolve('elysiajs-nuxt/preset') },
  // mandatory configuration!
  vite: { server: { origin: 'localhost:3000' } }
})
```

3. use elysiajs-nuxt as a plugin

```ts
// index.ts
import { Elysia } from 'elysia'
import elysiaNuxt from 'elysiajs-nuxt'

new Elysia().use(elysiaNuxt).listen(5566)
```

4. start the servers, both nuxt and elysia

```sh
bun --bun --watch index.ts
bun --bun nuxt dev
```

### Production Environment

1. compile the Client

```ts
bun --bun nuxt build
```

2. start the Server

```sh
# mandatory configuration!
NODE_ENV=production bun --bun index.ts
```

### Example

- [preview](/preview)

## Author

- [CHANG, TZU-YEN](https://github.com/trylovetom)

## Languages

- [English](/README.md)
- [繁體中文](/README-zh-TW.md)
