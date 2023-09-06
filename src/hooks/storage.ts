import { storage } from 'webextension-polyfill'
import type { Storage } from 'webextension-polyfill'

export function useStorage<T>(key: string, value: T) {
  const [state, setState] = useState<T>(value)
  async function getItem() {
    return (await storage.local.get(key))[key]
  }

  function setItem(value: T) {
    setState(value)
    return storage.local.set({ [key]: value })
  }

  const onStorageChange = useCallback(async (changes: Record<string, Storage.StorageChange>, areaName: string) => {
    if (areaName === 'local' && changes[key])
      setState(changes[key].newValue)
  }, [])

  useEffect(() => {
    storage.onChanged.addListener(onStorageChange)
    getItem().then(setState)
    return () => {
      storage.onChanged.removeListener(onStorageChange)
    }
  })
  return { state, getItem, setItem }
}
