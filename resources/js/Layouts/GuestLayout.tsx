import { PropsWithChildren } from 'react'

export default function ({ children }: PropsWithChildren) {
  return (
    <div className='flex min-h-screen flex-col items-center gap-10 bg-gray-100 pt-6 sm:justify-center sm:pt-0'>
      <div className='flex items-center gap-x-4'>
        <img src='/logo.svg' alt='Logo' className='h-12' />

        <span className='text-3xl font-extrabold text-[#007dfc]'>My Docs</span>
      </div>

      <div className='flex w-full flex-col items-center md:h-auto md:max-w-md'>
        {children}
      </div>
    </div>
  )
}
