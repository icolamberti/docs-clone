import { useDocuments } from '@/Context/DocumentsContext'
import { router } from '@inertiajs/react'
import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './Ui/alert-dialog'

type Props = {
  documentId: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ({ documentId, open, setOpen }: Props) {
  const { documents, setDocuments } = useDocuments()

  const [isLoading, setIsLoading] = useState(false)

  const onHandleDelete = () => {
    setIsLoading(true)

    router.delete(`/documents/${documentId}`, {
      preserveScroll: true,
      onSuccess: () => {
        setDocuments(documents.filter(doc => doc.id !== documentId))
      },
      onFinish: () => {
        setIsLoading(false)
      },
    })
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            document.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction disabled={isLoading} onClick={onHandleDelete}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
