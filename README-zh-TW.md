# elysiajs-nuxt

> 輕鬆的整合 elysia 與 nuxt，支援 @nuxt/devtools 歐！

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
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 必要設定！
  nitro: { preset: require.resolve('elysiajs-nuxt/preset') },
  // 必要設定！
  vite: { server: { origin: 'localhost:3000' } }
})
```

3. 使用 elysiajs-nuxt 為 plugin

```ts
// index.ts
import { Elysia } from 'elysia'
import elysiaNuxt from 'elysiajs-nuxt'

new Elysia().use(elysiaNuxt).listen(5566)
```

4. 啟動服務器，nuxt 與 elysia

```sh
bun --bun --watch index.ts
bun --bun nuxt dev
```

### 產品環境

1. 編譯客戶端

```ts
bun --bun nuxt build
```

2. 啟動服務器

```sh
# 環境變數為必要設定
NODE_ENV=production bun --bun index.ts
```

### 範例參考

- [preview](/preview)

## 作者

- [CHANG, TZU-YEN](https://github.com/trylovetom)

## 語言

- [English](/README.md)
- [繁體中文](/README-zh-TW.md)
