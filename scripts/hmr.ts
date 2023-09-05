import fs from 'fs-extra'
import { log, port, r } from './utils'

const code = `import RefreshRuntime from "http://localhost:${port}/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => { }
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
`
export async function writeHMR() {
  await fs.ensureDir(r('extension/dist'))
  fs.writeFileSync(r('extension/dist/hmr.js'), code)
  log('PRE', 'write hmr')
}
