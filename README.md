# Starter webextension

A [Vite](https://vitejs.dev/) powered WebExtension ([Chrome](https://developer.chrome.com/docs/extensions/reference/), [FireFox](https://addons.mozilla.org/en-US/developers/), etc.) starter template.

## Features

- ⚡️ **Instant HMR** 
- 🦾 [TypeScript](https://www.typescriptlang.org/) - type safe
- 🖥 Content Script - UseReact even in content script
- 🌍 WebExtension - isomorphic extension for Chrome, Firefox, and others
- 📃 Dynamic `manifest.json` with full type support
- 🌈 [Tailwind CSS](https://tailwindcss.com/) - the utility-first CSS framework 
- 🎨 [ShadeCN ui](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS.

## Getting Started

### dev

```bash
pnpm dev
```

Then **load extension in browser with the `extension/` folder**.

For Firefox developers, you can run the following command instead:

```bash
pnpm start:firefox
```

`web-ext` auto reload the extension when `extension/` files changed.

> While Vite handles HMR automatically in the most of the case, [Extensions Reloader](https://chrome.google.com/webstore/detail/fimgfedafeadlieiabdeeaodndnlbhid) is still recommanded for cleaner hard reloading.

### Build

To build the extension, run

```bash
pnpm build
```

## Thanks 

https://github.com/antfu/vitesse-webext
