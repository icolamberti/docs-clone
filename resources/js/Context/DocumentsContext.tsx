import { TDocument } from '@/types/documents'
import { createContext, PropsWithChildren, useContext, useState } from 'react'

interface DocumentsContextProps {
  documents: TDocument[]
  setDocuments: React.Dispatch<React.SetStateAction<TDocument[]>>
}

const DocumentsContext = createContext<DocumentsContextProps | undefined>(
  undefined,
)

export const DocumentsProvider = ({ children }: PropsWithChildren<{}>) => {
  const [documents, setDocuments] = useState<TDocument[]>([])

  return (
    <DocumentsContext.Provider value={{ documents, setDocuments }}>
      {children}
    </DocumentsContext.Provider>
  )
}

export const useDocuments = () => {
  const context = useContext(DocumentsContext)
  if (!context) {
    throw new Error('useDocuments must be used within a DocumentsProvider')
  }
  return context
}
