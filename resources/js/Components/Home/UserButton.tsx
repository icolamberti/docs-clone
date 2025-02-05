import { Link, usePage } from '@inertiajs/react'
import { LogOutIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../Ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../Ui/dropdown-menu'

export default function () {
  const { user } = usePage().props.auth

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className='relative outline-none'>
        <Avatar className='transition hover:opacity-75'>
          <AvatarImage alt={user.name} src={user.avatar} />
          <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' side='bottom'>
        <Link href='/logout' method='post' className='w-full'>
          <DropdownMenuItem className='h-10 cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive'>
            <LogOutIcon className='mr-2 size-4' />
            Logout
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
