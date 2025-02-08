import { useDocuments } from '@/Context/DocumentsContext'
import { useForm } from '@inertiajs/react'
import InputError from './InputError'
import { Button } from './Ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './Ui/dialog'
import { Input } from './Ui/input'

type Props = {
  documentId: string
  initialTitle: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ({ documentId, initialTitle, open, setOpen }: Props) {
  const { documents, setDocuments } = useDocuments()

  const { data, setData, patch, processing, errors } = useForm({
    title: initialTitle,
  })

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData('title', e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    patch(`/documents/${documentId}`, {
      preserveScroll: true,
      onSuccess: () => {
        let updatedDocument = documents.find(doc => doc.id === documentId)

        if (updatedDocument) {
          updatedDocument.title = data.title
          setDocuments(
            documents.map(doc =>
              doc.id === documentId ? updatedDocument : doc,
            ),
          )
          setOpen(false)
        }
      },
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Rename document</DialogTitle>
            <DialogDescription>
              Enter a new name for this document
            </DialogDescription>
          </DialogHeader>

          <div className='my-4 space-y-2'>
            <Input value={data.title} onChange={onTitleChange} />
            <InputError message={errors.title} />
          </div>

          <DialogFooter>
            <Button
              type='button'
              variant='outline'
              disabled={processing}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type='submit' isLoading={processing} className='w-20'>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
