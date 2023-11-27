## This Section Can Be Deleted 此段段落可刪除

Please write the title in the following format [Type of Change] Title. The more detailed the description, the better the understanding of the risks involved in merging this PR. Thank you.
Additionally, you can submit for review even if it's incomplete, to get assistance from others online.

標題請依照以下格式撰寫 `[更動種類] 標題`。描述越詳細越能了解，合併此 PR 的風險，謝謝。
另外，未完成的情況下也可以提交審核，讓大家可以在線上協助你。

## Description 描述

Describe what this PR primarily does, providing related screenshots or GIF videos is recommended. Example: This PR fixes the issue where the multilingual system could not automatically detect and switch the browser language. The issue originated from a bug in the old version of the module on iOS mobile. Therefore, the module was updated and the corresponding configuration files were modified.

這 PR 主要做了什麼事情，建議提供相關的截圖或是 GIF 影片。範例：此 PR 修正了多國語系，無法自動偵測瀏覽器語言而更換的的問題。原因發生於舊版本模組在 iOS 手機版上有 Bug。所以更新了模組並修改了相對應的設定檔案。

## Related Issue 關聯 Issue

Which Issue is this related to, use #1 to associate it. You can use Close #1 to indicate the action after the PR is merged.

與哪個 Issue 有相關，使用 `#1` 井字號做關聯。可以使用 `Close #1`，來標示 PR 合併後的操作。

## Type of Change 更動種類

Tick the type of change, and modify the title and labels according to the type. You can add options yourself.

勾選更動的種類，並依照種類修改標題與標籤，可自行增加選項。

- [ ] Bug Fix 問題修正
- [ ] Feature Development 功能開發
- [ ] Breaking Update 破壞性更新

## Changed Files 更動項目

List the files you changed, you can use this command git diff origin/main --name-only to list all changed files. Attention! If there is a breaking update, it must be marked, and the affected range described. Example:

- Installed a new version of the i18n module
- **Updated i18n configuration file**: Breaking update, adjusted the structure of the configuration file, old versions of the file will not be supported.

你動了哪些項目，可使此指令 `git diff origin/main --name-only` 列出所有更動檔案。注意！如果有破壞性更新，一定要標記出來，且要描述受影響範圍。範例：

- 安裝新版的 i18n 模組
- **更新 i18n 設定檔案**：破壞性更新，調整了設定檔案的結構，舊版的設定檔案將不支援。

## Self-Check 自我檢查

The following are items that must be checked before merging the PR, assisted by CI.

以下為合併 PR 前必須檢查的項目，CI 協助檢查。

- [ ] My code adheres to the project style 我的程式碼遵守了專案風格
- [ ] I have updated the corresponding documents 我已經更新了相對應的文件
- [ ] My code has been tested and passed 我的程式碼已經被測試且通過了
