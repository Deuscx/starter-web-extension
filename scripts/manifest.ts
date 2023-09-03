import fs from 'fs-extra'
import type { PluginOption } from 'vite'
import { getManifest } from '../src/manifest'
import { r } from './utils'

export default function makeManifest(): PluginOption {
  return {
    name: 'make-manifest',
    buildEnd() {
      fs.writeJSON(r('public/manifest.json'), getManifest(), { spaces: 2 })
      // log('PRE', 'write manifest.json')
    },
  }
}
