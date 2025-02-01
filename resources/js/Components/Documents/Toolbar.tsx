import { cn } from '@/Lib/utils'
import { useEditorStore } from '@/Stores/useEditorStore'
import { LucideIcon, Undo2Icon } from 'lucide-react'

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
    ],
  ]

  return (
    <div className='flex min-h-10 items-center gap-x-0.5 overflow-x-auto rounded-3xl bg-[#f1f4f9] px-2.5 py-0.5'>
      {sections[0].map(item => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  )
}
