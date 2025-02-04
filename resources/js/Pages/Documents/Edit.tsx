import Editor from '@/Components/Documents/Editor'
import Navbar from '@/Components/Documents/Navbar'
import Toolbar from '@/Components/Documents/Toolbar'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function () {
  return (
    <AuthenticatedLayout>
      <div className='min-h-screen bg-[#fafbfd]'>
        <div className='fixed left-0 right-0 top-0 z-10 flex flex-col gap-y-2 bg-[#fafbfd] px-4 pt-2 print:hidden'>
          <Navbar />

          <Toolbar />
        </div>

        <div className='pt-[114px] print:pt-0'>
          <Editor />
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
