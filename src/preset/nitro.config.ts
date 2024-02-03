import { fileURLToPath } from 'node:url'
import type { NitroPreset } from 'nitropack'

export default <NitroPreset>{
  preset: 'node-server',
  entry: fileURLToPath(new URL('./entry.ts', import.meta.url)),
  // https://bun.sh/docs/runtime/modules#resolution
  exportConditions: ['bun', 'worker', 'node', 'import', 'default'],
  commands: { deploy: 'NODE_ENV=production bun run src-server/index.ts' }
}
