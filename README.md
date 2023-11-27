# elysiajs-nuxt

> Easily integrate elysia with nuxt, now supporting @nuxt/devtools!

**Demo**

https://github.com/nuxt/nuxt/assets/13268073/33e85108-df4d-4fab-a857-2619dfb9b5a4

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
// src-client/nuxt.config.ts
export default defineNuxtConfig({
  // mandatory configuration!
  nitro: { preset: import.meta.resolveSync('elysiajs-nuxt/preset') },
  // mandatory configuration!
  vite: { server: { origin: 'localhost:3000' } }
})
```

3. use elysiajs-nuxt as a plugin

```ts
// src-server/index.ts
import { Elysia } from 'elysia'
import elysiaNuxt from 'elysiajs-nuxt'

new Elysia().use(elysiaNuxt).listen(5566)
```

4. simultaneously start dev servers, both client(nuxt) and server(elysia)

```sh
# server
bun run --watch src-server
```

```sh
# client
bun --bun nuxt dev src-client/index.ts
```

### Production Environment

1. compile the Client

```ts
bun --bun nuxt build src-client
```

2. start the Server

```sh
# mandatory configuration!
NODE_ENV=production bun run src-server/index.ts
```

### Example

- [preview](/preview)

## Author

- [CHANG, TZU-YEN](https://github.com/trylovetom)

## Languages

- [English](./README.md)
- [繁體中文](./README-zh-Hant.md)
