import Navbar from '@/Components/Home/Navbar'
import TemplatesGallery from '@/Components/Home/TemplatesGallery'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function () {
  return (
    <AuthenticatedLayout>
      <div className='flex min-h-screen flex-col'>
        <div className='fixed left-0 right-0 top-0 z-10 h-16 bg-white p-4'>
          <Navbar />
        </div>

        <div className='mt-16'>
          <TemplatesGallery />
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
