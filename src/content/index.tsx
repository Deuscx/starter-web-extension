import { createRoot } from 'react-dom/client'
import './style.css'
import browser from 'webextension-polyfill'

(() => {
  // mount component to context window
  const container = document.createElement('div')
  container.id = __NAME__
  const root = document.createElement('div')
  const styleEl = document.createElement('link')
  const shadowDOM = container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) || container
  styleEl.setAttribute('rel', 'stylesheet')
  styleEl.setAttribute('href', browser.runtime.getURL('dist/content/style.css'))

  shadowDOM.appendChild(styleEl)
  shadowDOM.appendChild(root)
  document.body.appendChild(container)
  const reactRoot = createRoot(root)
  reactRoot.render(
  <div className='absolute bottom-0 left-0 text-lg text-black bg-amber-400 z-50 h-10' >
    content script loaded
  </div>,
  )
})()

try {
  // eslint-disable-next-line no-console
  console.log('content script loaded')
}
catch (e) {
  console.error(e)
}
