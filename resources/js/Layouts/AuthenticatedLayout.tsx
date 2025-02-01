import { usePage } from '@inertiajs/react'
import { PropsWithChildren } from 'react'

export default function ({ children }: PropsWithChildren) {
  const user = usePage().props.auth.user

  return (
    <div className='min-h-screen bg-gray-100'>
      <main>{children}</main>
    </div>
  )
}
