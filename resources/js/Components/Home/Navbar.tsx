import { Link } from '@inertiajs/react'
import SearchInput from './SearchInput'

export default function () {
  return (
    <nav className='flex h-full w-full items-center justify-between'>
      <div className='flex shrink-0 items-center gap-3 pr-6'>
        <Link href='/'>
          <img src='/logo.svg' alt='Logo' className='size-9' />
        </Link>

        <h3 className='text-xl font-bold text-[#007dfc]'>My Docs</h3>
      </div>

      <SearchInput />

      <div />
    </nav>
  )
}
