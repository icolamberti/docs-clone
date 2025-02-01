import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Link } from '@inertiajs/react'

export default function () {
  return (
    <AuthenticatedLayout>
      <div className='flex items-center justify-center'>
        <Link href='/documents/d12345'>Editor Page</Link>
      </div>
    </AuthenticatedLayout>
  )
}
