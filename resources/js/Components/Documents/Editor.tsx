import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function () {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: 'padding-left: 56px; padding-right: 56px;',
        class:
          'focus:outline-none print:border-0 bg-white border border-[#c7c7c7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text',
      },
    },
    extensions: [StarterKit],
    content: `
      <h1>
        Hello World!
      </h1>
    `,
  })

  return (
    <div className='size-full overflow-x-auto bg-[#f9fbfd] px-4 print:overflow-visible print:bg-white print:p-0'>
      <div className='mx-auto flex w-[816px] min-w-max justify-center py-4 print:w-full print:min-w-0 print:py-0'>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
