import type { ChangeEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Options(): JSX.Element {
  const [value, setValue] = useState('')

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }
  return <main className='grid place-items-center p-4 text-center'>
    <div>
      <h1 className='text-lg'>Options</h1>
      <div className='flex gap-2'>
        <Input value={value} onChange={onChange} />
        <Button type="submit">Confirm</Button>
      </div>
    </div>
  </main>
}
