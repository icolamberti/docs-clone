import { TDocument } from '@/types/documents'
import { router } from '@inertiajs/react'
import { format } from 'date-fns'
import { Building2Icon, CircleUserIcon } from 'lucide-react'
import { SiGoogledocs } from 'react-icons/si'
import { TableCell, TableRow } from '../Ui/table'
import DocumentMenu from './DocumentMenu'

type Props = {
  document: TDocument
}

export default function ({ document }: Props) {
  const onRowClick = () => {
    router.visit(`/documents/${document.id}`)
  }

  return (
    <TableRow className='cursor-pointer' onClick={onRowClick}>
      <TableCell className='w-[50px]'>
        <SiGoogledocs className='size-6 fill-blue-500' />
      </TableCell>

      <TableCell className='font-medium md:w-[45%]'>{document.title}</TableCell>

      <TableCell className='hidden items-center gap-2 text-muted-foreground md:flex'>
        {document.organization_id ? (
          <Building2Icon className='size-4' />
        ) : (
          <CircleUserIcon className='size-4' />
        )}

        {document.organization_id ? 'Organization' : 'Personal'}
      </TableCell>

      <TableCell className='hidden text-muted-foreground md:table-cell'>
        {format(new Date(document.created_at), 'MMM dd, yyyy')}
      </TableCell>

      <TableCell className='flex justify-end'>
        <DocumentMenu document={document} />
      </TableCell>
    </TableRow>
  )
}
