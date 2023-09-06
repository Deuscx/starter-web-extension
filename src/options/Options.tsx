import type { ChangeEvent } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useStorage } from '@/hooks/storage'

export default function Options(): JSX.Element {
  const [value, setValue] = useState('')
  const storageDemo = useStorage('webext-demo', 'Storage Demo')
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  function onSubmit(event: any) {
    event.preventDefault()
    storageDemo.setItem(value)
  }

  useEffect(() => {
    storageDemo.getItem().then(setValue)
  }, [])

  return <main className='grid place-items-center p-4 text-center'>
    <div>
      <h1 className='text-lg'>Options</h1>
      <div className='flex gap-2'>
        <Input value={value} onChange={onChange} />
        <Button type="submit" onClick={onSubmit}>Confirm</Button>
      </div>
    </div>
  </main>
}
