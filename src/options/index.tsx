import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Options from '@/options/Options'
import '@/styles/global.css'

function init() {
  const rootContainer = document.querySelector('#__root')
  if (!rootContainer)
    throw new Error('Can\'t find Options root element')
  const root = createRoot(rootContainer)
  root.render(<StrictMode><Options /></StrictMode>)
}

init()
