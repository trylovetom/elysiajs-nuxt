# elysiajs-nuxt

> 輕鬆地整合 elysia 與 nuxt，支援 @nuxt/devtools 與 @elysiajs/eden 歐！

**Demo**

https://github.com/nuxt/nuxt/assets/13268073/d5c96902-698f-482a-8360-9f657ab40eba

## 使用

### 開發環境

1. 安裝套件

```sh
# 目前僅支援 Bun
bun add elysiajs-nuxt
bun add nuxt elysia --dev
```

2. 設定 nuxt.config.ts

```ts
// src-client/nuxt.config.ts
export default defineNuxtConfig({
  // 必要設定！
  nitro: { preset: import.meta.resolveSync('elysiajs-nuxt/preset') },
  // 必要設定！
  vite: { server: { origin: 'localhost:3000' } }
})
```

3. 使用 elysiajs-nuxt 為 plugin

```ts
// src-server/index.ts
import { Elysia } from 'elysia'
import elysiaNuxt from 'elysiajs-nuxt'

new Elysia().use(elysiaNuxt).listen(5566)
```

4. 同時啟動開發服務器，客戶端（nuxt） 與服務器（elysia）

```sh
# 服務器
bun run --watch src-server
```

```sh
# 客戶端
bun --bun nuxt dev src-client/index.ts
```

### 產品環境

1. 編譯客戶端

```ts
bun --bun nuxt build src-client
```

2. 啟動服務器

```sh
# 環境變數為必要設定
NODE_ENV=production bun run src-server/index.ts
```

### 範例參考

- [preview](/preview)

## 作者

- [張子晏](https://github.com/trylovetom)

## 語言

- [English](./README.md)
- [繁體中文](./README-zh-Hant.md)
