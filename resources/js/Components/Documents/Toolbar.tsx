import { cn } from '@/Lib/utils'
import { useEditorStore } from '@/Stores/useEditorStore'
import { type Level } from '@tiptap/extension-heading'
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ChevronDownIcon,
  HighlighterIcon,
  ImageIcon,
  ItalicIcon,
  Link2Icon,
  ListIcon,
  ListOrderedIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  MinusIcon,
  PlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SearchIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
  UploadIcon,
} from 'lucide-react'
import { useState } from 'react'
import { SketchPicker, type ColorResult } from 'react-color'
import { Button } from '../Ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../Ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../Ui/dropdown-menu'
import { Input } from '../Ui/input'
import { Separator } from '../Ui/separator'

interface ToolbarButtonProps {
  onClick?: () => void
  isActive?: boolean
  icon: LucideIcon
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex h-7 min-w-7 items-center justify-center rounded-sm text-sm hover:bg-neutral-200/80',
        isActive && 'bg-neutral-200/80',
      )}
    >
      <Icon className='size-4' />
    </button>
  )
}

const FontFamilyButton = () => {
  const { editor } = useEditorStore()

  const fonts = [
    {
      label: 'Arial',
      value: 'Arial',
    },
    {
      label: 'Courier New',
      value: 'Courier New',
    },
    {
      label: 'Georgia',
      value: 'Georgia',
    },
    {
      label: 'Times New Roman',
      value: 'Times New Roman',
    },
    {
      label: 'Verdana',
      value: 'Verdana',
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex h-7 w-[120px] shrink-0 items-center justify-between overflow-hidden rounded-sm px-1.5 text-sm hover:bg-neutral-200/80'>
          <span className='truncate'>
            {editor?.getAttributes('textStyle').fontFamily || 'Arial'}
          </span>

          <ChevronDownIcon className='ml-2 size-4 shrink-0' />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='flex flex-col gap-y-1 p-1'>
        {fonts.map(({ label, value }) => (
          <button
            key={value}
            className={cn(
              'flex items-center gap-x-2 rounded-sm px-2 py-1 hover:bg-neutral-200/80',
              editor?.getAttributes('textStyle').fontFamily === value &&
                'bg-neutral-200/80',
            )}
            style={{ fontFamily: value }}
            onClick={() => editor?.chain().focus().setFontFamily(value).run()}
          >
            <span className='text-sm'>{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const HeadingLevelButton = () => {
  const { editor } = useEditorStore()

  const headings = [
    {
      label: 'Normal text',
      value: 0,
      fontSize: '16px',
    },
    {
      label: 'Heading 1',
      value: 1,
      fontSize: '32px',
    },
    {
      label: 'Heading 2',
      value: 2,
      fontSize: '24px',
    },
    {
      label: 'Heading 3',
      value: 3,
      fontSize: '20px',
    },
    {
      label: 'Heading 4',
      value: 4,
      fontSize: '18px',
    },
    {
      label: 'Heading 5',
      value: 5,
      fontSize: '16px',
    },
  ]

  const getCurrentHeading = () => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive('heading', level)) {
        return `Heading ${level}`
      }
    }

    return 'Normal text'
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex h-7 min-w-7 shrink-0 items-center justify-center overflow-hidden rounded-sm px-1.5 text-sm hover:bg-neutral-200/80'>
          <span className='truncate'>{getCurrentHeading()}</span>

          <ChevronDownIcon className='ml-2 size-4 shrink-0' />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='flex flex-col gap-y-1 p-1'>
        {headings.map(({ label, value, fontSize }) => (
          <button
            key={value}
            className={cn(
              'flex items-center gap-x-2 rounded-sm px-2 py-1 hover:bg-neutral-200/80',
              ((value === 0 && !editor?.isActive('heading')) ||
                editor?.isActive('heading', { level: value })) &&
                'bg-neutral-200/80',
            )}
            style={{ fontSize }}
            onClick={() => {
              if (value === 0) {
                editor?.chain().focus().setParagraph().run()
              } else {
                editor
                  ?.chain()
                  .focus()
                  .toggleHeading({ level: value as Level })
                  .run()
              }
            }}
          >
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const TextColorButton = () => {
  const { editor } = useEditorStore()

  const value = editor?.getAttributes('textStyle').color || '#000000'

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex h-7 min-w-7 shrink-0 flex-col items-center justify-center overflow-hidden rounded-sm px-1.5 text-sm hover:bg-neutral-200/80'>
          <span className='text-xs'>A</span>

          <div
            className='h-0.5 w-full'
            style={{ backgroundColor: value }}
          ></div>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='p-0'>
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const HighlightColorButton = () => {
  const { editor } = useEditorStore()

  const value = editor?.getAttributes('highlight').color || '#ffffff'

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex h-7 min-w-7 shrink-0 flex-col items-center justify-center overflow-hidden rounded-sm px-1.5 text-sm hover:bg-neutral-200/80'>
          <HighlighterIcon className='size-4' />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='p-0'>
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const ImageButton = () => {
  const { editor } = useEditorStore()

  const [open, setOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const onChange = (src: string) => {
    editor?.chain().focus().setImage({ src }).run()
  }

  const onUpload = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'

    input.onchange = e => {
      const file = (e.target as HTMLInputElement).files?.[0]

      if (file) {
        const imageUrl = URL.createObjectURL(file)
        onChange(imageUrl)
      }
    }

    input.click()
  }

  const handleImageUrlSubmit = () => {
    if (imageUrl) {
      onChange(imageUrl)
      setImageUrl('')
      setOpen(false)
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className='flex h-7 min-w-7 shrink-0 flex-col items-center justify-center overflow-hidden rounded-sm px-1.5 text-sm hover:bg-neutral-200/80'>
            <ImageIcon className='size-4' />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem onClick={onUpload}>
            <UploadIcon className='mr-2 size-4' />
            Upload
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOpen(true)}>
            <SearchIcon className='mr-2 size-4' />
            Paste image url
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Insert image URL</DialogTitle>
          </DialogHeader>

          <Input
            placeholder='Insert image URL'
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleImageUrlSubmit()
              }
            }}
            autoFocus
          />

          <DialogFooter>
            <Button onClick={handleImageUrlSubmit}>Insert</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

const LinkButton = () => {
  const { editor } = useEditorStore()

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const onChange = (href: string) => {
    editor?.chain().focus().extendMarkRange('link').setLink({ href }).run()
    setOpen(false)
    setValue('')
  }

  return (
    <DropdownMenu
      open={open}
      onOpenChange={open => {
        setOpen(open)
        if (open) {
          setValue(editor?.getAttributes('link').href || '')
        }
      }}
    >
      <DropdownMenuTrigger asChild>
        <button className='flex h-7 min-w-7 shrink-0 flex-col items-center justify-center overflow-hidden rounded-sm px-1.5 text-sm hover:bg-neutral-200/80'>
          <Link2Icon className='size-4' />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='flex items-center gap-x-2 p-2.5'>
        <Input
          placeholder='https://example.com'
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              onChange(value)
            }
          }}
          autoFocus
        />

        <Button onClick={() => onChange(value)}>Apply</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const AlignButton = () => {
  const { editor } = useEditorStore()

  const alignments = [
    {
      label: 'Align Left',
      value: 'left',
      icon: AlignLeftIcon,
    },
    {
      label: 'Align Center',
      value: 'center',
      icon: AlignCenterIcon,
    },
    {
      label: 'Align Right',
      value: 'right',
      icon: AlignRightIcon,
    },
    {
      label: 'Justify',
      value: 'justify',
      icon: AlignJustifyIcon,
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex h-7 min-w-7 shrink-0 flex-col items-center justify-center overflow-hidden rounded-sm px-1.5 text-sm hover:bg-neutral-200/80'>
          <AlignLeftIcon className='size-4' />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='flex flex-col gap-y-1 p-1'>
        {alignments.map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
            className={cn(
              'flex items-center gap-x-2 rounded-sm px-2 py-1 hover:bg-neutral-200/80',
              editor?.isActive({ textAlign: value }) && 'bg-neutral-200/80',
            )}
          >
            <Icon className='size-4' />

            <span className='text-sm'>{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const ListButton = () => {
  const { editor } = useEditorStore()

  const lists = [
    {
      label: 'Bullet List',
      icon: ListIcon,
      isActive: () => editor?.isActive('bulletList'),
      onClick: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      label: 'Ordered List',
      icon: ListOrderedIcon,
      isActive: () => editor?.isActive('orderedList'),
      onClick: () => editor?.chain().focus().toggleOrderedList().run(),
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex h-7 min-w-7 shrink-0 flex-col items-center justify-center overflow-hidden rounded-sm px-1.5 text-sm hover:bg-neutral-200/80'>
          <ListIcon className='size-4' />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='flex flex-col gap-y-1 p-1'>
        {lists.map(({ label, icon: Icon, onClick, isActive }) => (
          <button
            key={label}
            onClick={onClick}
            className={cn(
              'flex items-center gap-x-2 rounded-sm px-2 py-1 hover:bg-neutral-200/80',
              isActive() && 'bg-neutral-200/80',
            )}
          >
            <Icon className='size-4' />

            <span className='text-sm'>{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const FontSizeButton = () => {
  const { editor } = useEditorStore()

  const currentFontSize = editor?.getAttributes('textStyle').fontSize
    ? editor?.getAttributes('textStyle').fontSize.replace('px', '')
    : '16'

  const [fontSize, setFontSize] = useState(currentFontSize)
  const [inputValue, setInputValue] = useState(fontSize)
  const [isEditing, setIsEditing] = useState(false)

  const updateFontSize = (newSize: string) => {
    const size = parseInt(newSize)

    if (!isNaN(size) && size > 0) {
      editor?.chain().focus().setFontSize(`${size}px`).run()
      setFontSize(newSize)
      setInputValue(newSize)
      setIsEditing(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputBlur = () => {
    updateFontSize(inputValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      updateFontSize(inputValue)
      editor?.commands.focus()
    }
  }

  const increment = () => {
    const newSize = parseInt(fontSize) + 1
    updateFontSize(newSize.toString())
  }

  const decrement = () => {
    const newSize = parseInt(fontSize) - 1

    if (newSize > 0) {
      updateFontSize(newSize.toString())
    }
  }

  return (
    <div className='flex items-center gap-x-0.5'>
      <button
        className='flex h-7 w-7 shrink-0 items-center justify-center rounded-sm hover:bg-neutral-200/80'
        onClick={decrement}
      >
        <MinusIcon className='size-4' />
      </button>

      {isEditing ? (
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className='h-7 w-10 rounded-sm border border-neutral-400 bg-transparent text-center text-sm focus:outline-none focus:ring-0'
        />
      ) : (
        <button
          className='h-7 w-10 cursor-text rounded-sm border border-neutral-400 bg-transparent text-center text-sm hover:bg-neutral-200/80'
          onClick={() => {
            setIsEditing(true), setFontSize(currentFontSize)
          }}
        >
          {currentFontSize}
        </button>
      )}

      <button
        className='flex h-7 w-7 shrink-0 items-center justify-center rounded-sm hover:bg-neutral-200/80'
        onClick={increment}
      >
        <PlusIcon className='size-4' />
      </button>
    </div>
  )
}

export default function () {
  const { editor } = useEditorStore()

  const sections: {
    label: string
    icon: LucideIcon
    onClick: () => void
    isActive?: boolean
  }[][] = [
    [
      {
        label: 'Undo',
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: 'Redo',
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: 'Print',
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: 'Spell check',
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute('spellcheck')
          editor?.view.dom.setAttribute(
            'spellcheck',
            current === 'false' ? 'true' : 'false',
          )
        },
      },
    ],
    [
      {
        label: 'Bold',
        icon: BoldIcon,
        isActive: editor?.isActive('bold'),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: 'Italic',
        icon: ItalicIcon,
        isActive: editor?.isActive('italic'),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: 'Underline',
        icon: UnderlineIcon,
        isActive: editor?.isActive('underline'),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: 'Comment',
        icon: MessageSquarePlusIcon,
        onClick: () => console.log('TODO: comment'),
        isActive: false, // TODO: enable when comment is active
      },
      {
        label: 'List Todo',
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive('taskList'),
      },
      {
        label: 'Remove Formatting',
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ]

  return (
    <div className='flex min-h-10 items-center gap-x-0.5 overflow-x-auto rounded-3xl bg-[#f1f4f9] px-2.5 py-0.5'>
      {sections[0].map(item => (
        <ToolbarButton key={item.label} {...item} />
      ))}

      <Separator orientation='vertical' className='h-6 bg-neutral-300' />

      <FontFamilyButton />

      <Separator orientation='vertical' className='h-6 bg-neutral-300' />

      <HeadingLevelButton />

      <Separator orientation='vertical' className='h-6 bg-neutral-300' />

      <FontSizeButton />

      <Separator orientation='vertical' className='h-6 bg-neutral-300' />

      {sections[1].map(item => (
        <ToolbarButton key={item.label} {...item} />
      ))}

      <TextColorButton />

      <HighlightColorButton />

      <Separator orientation='vertical' className='h-6 bg-neutral-300' />

      <LinkButton />

      <ImageButton />

      <AlignButton />

      {/* TODO: Line height */}

      <ListButton />

      {sections[2].map(item => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  )
}
