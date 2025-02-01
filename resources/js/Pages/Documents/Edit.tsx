import Editor from '@/Components/Documents/Editor'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function () {
  return (
    <AuthenticatedLayout>
      <Editor />
    </AuthenticatedLayout>
  )
}
