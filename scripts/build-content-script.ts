import { resolve } from 'node:path'
import type { PluginOption } from 'vite'
import { build } from 'vite'

// import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { log } from './utils'

const packages = [
  {
    content: resolve(__dirname, '../', 'src/pages/content/index.tsx'),
  },
]

const outDir = resolve(__dirname, '../dist')

export default function buildContentScript(): PluginOption {
  return {
    name: 'build-content',
    enforce: 'post',
    async buildEnd() {
      for (const _package of packages) {
        await build({
          publicDir: false,
          // plugins: [ cssInjectedByJsPlugin() ],
          build: {
            outDir,
            sourcemap: process.env.__DEV__ === 'true',
            emptyOutDir: false,
            rollupOptions: {
              input: _package,
              output: {
                entryFileNames: (chunk) => {
                  return `src/pages/${chunk.name}/index.js`
                },
              },
            },
          },
          configFile: false,
        })
      }
      log('content', 'build content script success')
    },
  }
}
