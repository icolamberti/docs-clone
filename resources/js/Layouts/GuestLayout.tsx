import { Link } from '@inertiajs/react'
import { FileTextIcon } from 'lucide-react'
import { PropsWithChildren } from 'react'

export default function ({ children }: PropsWithChildren) {
  return (
    <div className='flex min-h-screen flex-col items-center gap-6 bg-gray-100 pt-6 sm:justify-center sm:pt-0'>
      <div>
        <Link
          href='/'
          className='flex items-center gap-x-2 text-2xl font-bold text-sky-600'
        >
          <FileTextIcon className='size-10 fill-white' />
          My Docs
        </Link>
      </div>

      <div className='flex w-full flex-col items-center md:h-auto md:max-w-md'>
        {children}
      </div>
    </div>
  )
}
