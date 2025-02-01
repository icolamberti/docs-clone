import { cn } from '@/Lib/utils'

type Props = {
  message: string | undefined
  className?: string
}

export default function ({ message, className = '' }: Props) {
  return (
    <div
      className={cn(
        'text-left text-xs font-medium text-destructive',
        className,
      )}
    >
      {message}
    </div>
  )
}
