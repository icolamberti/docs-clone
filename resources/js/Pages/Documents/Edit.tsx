import Editor from '@/Components/Documents/Editor'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function () {
  return (
    <AuthenticatedLayout>
      <div className='min-h-screen bg-[#fafbfd]'>
        <Editor />
      </div>
    </AuthenticatedLayout>
  )
}
