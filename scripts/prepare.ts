// generate stub index.html files for dev entry
import { execSync } from 'node:child_process'
import fs from 'fs-extra'
import chokidar from 'chokidar'
import { isDev, log, port, r } from './utils'
import { writeHMR } from './hmr'

/**
 * Stub index.html to use Vite in development
 */
async function stubIndexHtml() {
  const views = [
    'options',
    'popup',
    // 'background',
  ]

  for (const view of views) {
    await fs.ensureDir(r(`extension/dist/${view}`))
    let data = await fs.readFile(r(`src/${view}/index.html`), 'utf-8')
    data = data
      .replace('"./index.tsx"', `"http://localhost:${port}/${view}/index.tsx"`)
      .replace('<div id="app"></div>', '<div id="app">Vite server did not start</div>')

    if (isDev)
      data = data.replace('</head>', '<script type="module" src="../hmr.js"></script></head>')

    await fs.writeFile(r(`extension/dist/${view}/index.html`), data, 'utf-8')
    log('PRE', `stub ${view}`)
  }
}

function writeManifest() {
  execSync('npx tsx ./scripts/manifest.ts', { stdio: 'inherit' })
}

writeManifest()

if (isDev) {
  writeHMR()
  stubIndexHtml()
  chokidar.watch(r('src/**/*.html'))
    .on('change', () => {
      stubIndexHtml()
    })
  chokidar.watch([r('src/manifest.ts'), r('package.json')])
    .on('change', () => {
      writeManifest()
    })
}
