import browser from 'webextension-polyfill'
import { useStorage } from '@/hooks/storage'
import { Button } from '@/components/ui/button'

export default function Popup() {
  const storageDemo = useStorage('webext-demo', 'Storage Demo')
  function openOptionsPage() {
    browser.runtime.openOptionsPage()
  }
  return (
  <main className="w-[300px] px-4 py-5 text-center text-gray-700">
    <div>Popup</div>

    <Button className="mt-2" size="sm" onClick={openOptionsPage}>
      Open Options
    </Button>
    <div className="mt-2">
      <span className="opacity-50">Storage:</span> { storageDemo.state}
    </div>
  </main>
  )
}
