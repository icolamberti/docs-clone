import { Link } from '@inertiajs/react'
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from 'lucide-react'
import { BsFilePdf } from 'react-icons/bs'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '../Ui/menubar'
import DocumentInput from './DocumentInput'

export default function () {
  return (
    <nav className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <Link href='/documents'>
          <img src='/logo.svg' alt='Logo' className='size-9' />
        </Link>

        <div className='flex flex-col'>
          <DocumentInput />

          <div className='flex'>
            <Menubar className='h-auto border-none bg-transparent p-0 shadow-none'>
              <MenubarMenu>
                <MenubarTrigger className='h-auto rounded-sm px-[7px] py-0.5 text-sm font-normal hover:bg-muted'>
                  File
                </MenubarTrigger>

                <MenubarContent className='print:hidden'>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileIcon className='mr-2 size-4' />
                      Save
                    </MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem>
                        <FileJsonIcon className='mr-2 size-4' />
                        JSON
                      </MenubarItem>

                      <MenubarItem>
                        <GlobeIcon className='mr-2 size-4' />
                        HTML
                      </MenubarItem>

                      <MenubarItem>
                        <BsFilePdf className='mr-2 size-4' />
                        PDF
                      </MenubarItem>

                      <MenubarItem>
                        <FileTextIcon className='mr-2 size-4' />
                        Text
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarItem>
                    <FilePlusIcon className='mr-2 size-4' />
                    New Document
                  </MenubarItem>

                  <MenubarSeparator />

                  <MenubarItem>
                    <FilePenIcon className='mr-2 size-4' />
                    Rename
                  </MenubarItem>

                  <MenubarItem>
                    <TrashIcon className='mr-2 size-4' />
                    Remove
                  </MenubarItem>

                  <MenubarSeparator />

                  <MenubarItem onClick={() => window.print()}>
                    <PrinterIcon className='mr-2 size-4' />
                    Print <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className='h-auto rounded-sm px-[7px] py-0.5 text-sm font-normal hover:bg-muted'>
                  Edit
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarItem>
                    <Undo2Icon className='mr-2 size-4' />
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>

                  <MenubarItem>
                    <Redo2Icon className='mr-2 size-4' />
                    Redo <MenubarShortcut>⌘Y</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className='h-auto rounded-sm px-[7px] py-0.5 text-sm font-normal hover:bg-muted'>
                  Insert
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Table</MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem>1 x 1</MenubarItem>
                      <MenubarItem>2 x 2</MenubarItem>
                      <MenubarItem>3 x 3</MenubarItem>
                      <MenubarItem>4 x 4</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className='h-auto rounded-sm px-[7px] py-0.5 text-sm font-normal hover:bg-muted'>
                  Format
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TextIcon className='mr-2 size-4' />
                      Text
                    </MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem>
                        <BoldIcon className='mr-2 size-4' />
                        Bold <MenubarShortcut>⌘B</MenubarShortcut>
                      </MenubarItem>

                      <MenubarItem>
                        <ItalicIcon className='mr-2 size-4' />
                        Italic <MenubarShortcut>⌘I</MenubarShortcut>
                      </MenubarItem>

                      <MenubarItem>
                        <UnderlineIcon className='mr-2 size-4' />
                        Underline <MenubarShortcut>⌘U</MenubarShortcut>
                      </MenubarItem>

                      <MenubarItem>
                        <StrikethroughIcon className='mr-2 size-4' />
                        Strikethrough&nbsp;&nbsp;
                        <MenubarShortcut>⌘S</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarItem>
                    <RemoveFormattingIcon className='mr-2 size-4' />
                    Clear formatting
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  )
}
