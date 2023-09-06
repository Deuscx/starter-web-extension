import { useStorage } from '@/hooks/storage'

export default function Popup() {
  const storageDemo = useStorage('webext-demo', 'Storage Demo')
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
      <header className="flex flex-col items-center justify-center text-white">
        {storageDemo.state}
      </header>
    </div>
  )
}
