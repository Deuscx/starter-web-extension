import path from 'node:path'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'

// import react from '@vitejs/plugin-react-swc'
import { isDev, port, r } from './scripts/utils'

export const sharedConfig: UserConfig = {
  root: r('src'),
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    AutoImport({
      imports: [
        'react',
        'react-router-dom',
      ],
    }),
  ],
}
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  ...sharedConfig,
  base: command === 'serve' ? `http://localhost:${port}/` : '/dist/',
  server: {
    port,
    hmr: {
      host: 'localhost',
    },
  },
  build: {
    outDir: r('extension/dist'),
    sourcemap: isDev ? 'inline' : false,
    emptyOutDir: false,
    rollupOptions: {
      input: {
        devtools: r('src/devtools/index.html'),
        panel: r('src/panel/index.html'),
        options: r('src/options/index.html'),
        popup: r('src/popup/index.html'),
      },
      output: {
        entryFileNames: chunk => `${chunk.name}/index.js`,
      },
    },
  },
}))
