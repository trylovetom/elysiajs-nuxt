---
name: Feature Request 功能開發
about: Describe the feature in detail to facilitate a smoother and more organized development process. 詳細描述功能，讓開發過程更加順利有條理。
title: '[Feature Request] Title [功能開發] 標題'
labels: '🤔 New Feature 新功能'
assignees: 'trylovetom'
---

## Statement 聲明

Explain whether the current feature is finalized or if there are any uncertainties, etc. This is mainly to alert the reader to important aspects and also to protect yourself. Example: This feature is still under discussion, please contact the author for any modifications or errors, thank you.

說明目前功能是否定案，或是哪些地方還不夠明確等等，主要是用來提示閱讀的人該注意的地方，也可保護自己。範例：本功能尚在討論中，如有修改或是錯誤，煩請聯絡作者，謝謝。

## Scenario 場景

Describe the scenarios in which the feature will be used. Simple template: "Who" needs "what" for "what reason"; Example: This project needs multilingual capabilities to serve customers in China and the United States.

說明功能使用在什麼樣的場景，簡易範本：「誰」需要「什麼」，為了「什麼」；範例：本專案為了服務中國與美國客戶，需要多國語系功能。

## Description 描述

Describe the structure and details of the feature, the easier to understand the better, recommend using diagrams and text for assistance. Example:

描述功能的架構與細節，越容易理解越好，建議圖文輔助。範例：

```txt
標題：多國語系功能
描述：
**語系功能**
透過定義不同的語系檔案，提供網站不同的語言版本。

**自動切換語系**
偵測瀏覽器語系，切換不同的語言。

**需支援語系**
繁體中文 zh-TW（預設）
簡體中文 zh-CN
英文 en-US
```

```txt
Title: Multilingual Functionality
Description:
**Languages**
Provide different language versions of the website by defining different language files.

**Automatic Language Switching**
Detect the browser's language setting and switch to the corresponding language.

**Languages to be Supported**
Traditional Chinese zh-TW (default)
Simplified Chinese zh-CN
English en-US
```

## Non-Goals 非目標

Explain what this feature does not need to do to prevent misunderstandings. Example: The multilingual feature only needs to have a pre-established structure and support for Traditional Chinese.

說明此功能不需要做的地方，避免閱讀的人多想。範例：多國語系功能只需要做預先架構，支援繁體中文即可。

## Notes 附註

Describe the technology used for this feature, how it is implemented, design drafts, etc. Example: Use the nuxt-i18n module to implement multilingual functionality.

說明此功能使用什麼技術，如何實現與設計稿等等附註。範例：使用 nuxt-i18n 模組來實作多國語系功能。
