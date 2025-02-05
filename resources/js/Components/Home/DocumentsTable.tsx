import { useSearch } from '@/Hooks/UseSearch'
import { TDocument } from '@/types/documents'
import { TMetadata } from '@/types/pagination'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from '../Loader'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../Ui/table'
import DocumentRow from './DocumentRow'

export default function () {
  const { search, setSearch } = useSearch()

  const [documents, setDocuments] = useState<TDocument[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [metadata, setMetadata] = useState<TMetadata>({
    current_page: 0,
    last_page: 0,
    next_page_url: '',
    links: [],
    length: 0,
    total: 0,
  })

  const updateDocuments = (data: TMetadata & { data: TDocument[] }) => {
    setDocuments(prevDocuments => [...prevDocuments, ...data.data])
    setMetadata({
      current_page: data.current_page,
      last_page: data.last_page,
      next_page_url: data.next_page_url,
      links: data.links,
      length: data.data.length,
      total: data.total,
    })
    setHasMore(data.current_page < data.last_page ? true : false)
  }

  const fetchData = (link = metadata.next_page_url) => {
    setIsLoading(true)

    axios
      .get(link)
      .then(res => {
        updateDocuments(res.data)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    setDocuments([])

    let url
    if (search === null) {
      url = '/documents/get'
    } else {
      url = `/documents/get?search=${search}`
    }

    fetchData(url)
  }, [search])

  return (
    <div className='mx-auto flex max-w-screen-xl flex-col gap-5 px-16 py-6'>
      {isLoading ? (
        <Loader className='mx-auto mt-16 size-10 stroke-blue-500' />
      ) : (
        <Table>
          <TableHeader>
            <TableRow className='border-none hover:bg-transparent'>
              <TableHead>Name</TableHead>
              <TableHead>&nbsp;</TableHead>
              <TableHead className='hidden md:table-cell'>Shared</TableHead>
              <TableHead className='hidden md:table-cell'>Created at</TableHead>
            </TableRow>
          </TableHeader>

          {documents.length === 0 ? (
            <TableBody>
              <TableRow className='hover:bg-transparent'>
                <TableCell
                  colSpan={4}
                  className='h-24 text-center text-muted-foreground'
                >
                  No documents found
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {documents.map(document => (
                <DocumentRow key={document.id} document={document} />
              ))}
            </TableBody>
          )}
        </Table>
      )}
    </div>
  )
}
