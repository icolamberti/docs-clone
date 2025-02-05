import { useForm } from '@inertiajs/react'
import { SearchIcon, XIcon } from 'lucide-react'
import { useRef } from 'react'
import { Button } from '../Ui/button'
import { Input } from '../Ui/input'

export default function () {
  const inputRef = useRef<HTMLInputElement>(null)

  const queryParams = new URLSearchParams(window.location.search)
  const searchQuery = queryParams.get('search') || ''

  const { data, setData, reset, get } = useForm({
    search: searchQuery,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData('search', e.target.value)
  }

  const handleClear = () => {
    reset()
    inputRef.current?.blur()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    get('/')
  }

  return (
    <div className='flex flex-1 items-center justify-center'>
      <form className='relative w-full max-w-[720px]' onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          placeholder='Search'
          value={data.search}
          onChange={handleChange}
          className='h-12 w-full rounded-full border-none bg-[#f0f4f8] px-14 placeholder:text-neutral-800 focus:bg-white focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px_1px_rgba(65,69,73,.15)] focus-visible:ring-0 focus-visible:ring-offset-0 md:text-base'
        />

        <Button
          variant='ghost'
          size='icon'
          className='absolute left-3 top-1/2 -translate-y-1/2 rounded-full'
        >
          <SearchIcon className='size-5' />
        </Button>

        {data.search && (
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='absolute right-3 top-1/2 -translate-y-1/2 rounded-full'
            onClick={handleClear}
          >
            <XIcon className='size-5' />
          </Button>
        )}
      </form>
    </div>
  )
}
