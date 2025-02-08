import { TDocument } from '@/types/documents'
import {
  ExternalLinkIcon,
  FilePenIcon,
  MoreVerticalIcon,
  TrashIcon,
} from 'lucide-react'
import { useState } from 'react'
import RemoveDialog from '../RemoveDialog'
import RenameDialog from '../RenameDialog'
import { Button } from '../Ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../Ui/dropdown-menu'

type Props = {
  document: TDocument
}

export default function ({ document }: Props) {
  const [open, setOpen] = useState(false)
  const [openRenameDialog, setOpenRenameDialog] = useState(false)
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false)

  const onNewTabClick = () => {
    window.open(`/documents/${document.id}`, '_blank')
  }

  return (
    <>
      <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon' className='rounded-full'>
            <MoreVerticalIcon className='size-4' />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem
            className='cursor-pointer'
            onSelect={() => onNewTabClick()}
          >
            <ExternalLinkIcon />
            Open in a new tab
          </DropdownMenuItem>

          <DropdownMenuItem
            className='cursor-pointer'
            onSelect={() => {
              setOpen(false)
              setOpenRenameDialog(true)
            }}
          >
            <FilePenIcon />
            Rename
          </DropdownMenuItem>

          <DropdownMenuItem
            onSelect={() => {
              setOpen(false)
              setOpenRemoveDialog(true)
            }}
            className='cursor-pointer bg-destructive/10 text-destructive focus:bg-destructive focus:text-destructive-foreground'
          >
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <RenameDialog
        documentId={document.id}
        initialTitle={document.title}
        open={openRenameDialog}
        setOpen={setOpenRenameDialog}
      />

      <RemoveDialog
        documentId={document.id}
        open={openRemoveDialog}
        setOpen={setOpenRemoveDialog}
      />
    </>
  )
}
