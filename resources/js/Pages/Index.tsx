import Navbar from '@/Components/Home/Navbar'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Link } from '@inertiajs/react'

export default function () {
  return (
    <AuthenticatedLayout>
      <div className='flex min-h-screen flex-col'>
        <div className='fixed left-0 right-0 top-0 z-10 h-16 bg-white p-4'>
          <Navbar />
        </div>

        <div className='mt-16'>
          <Link href='/documents/d12345' className='text-blue-500 underline'>
            Editor Page
          </Link>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
