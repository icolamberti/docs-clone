import Editor from '@/Components/Documents/Editor'
import Toolbar from '@/Components/Documents/Toolbar'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function () {
  return (
    <AuthenticatedLayout>
      <div className='min-h-screen bg-[#fafbfd]'>
        <Toolbar />

        <Editor />
      </div>
    </AuthenticatedLayout>
  )
}
