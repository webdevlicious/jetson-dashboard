import { IconBell, IconMail } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Link } from '@tanstack/react-router'

interface NotificationItem {
  id: string
  title: string
  timestamp: string
}

interface MessageItem {
  id: string
  from: string
  timestamp: string
}

interface NotificationsProps {
  notifications: NotificationItem[]
  messages: MessageItem[]
}

export function Notifications({ notifications, messages }: NotificationsProps) {
  return (
    <div className='flex items-center gap-2'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon' className='relative'>
            <IconBell className='size-5' />
            <span className='absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground'>
              {notifications.length}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-80'>
          <ScrollArea className='h-[300px] px-3'>
            {notifications.length === 0 ? (
              <p className='py-4 text-center text-sm text-muted-foreground'>
                No new notifications
              </p>
            ) : (
              notifications.slice(0, 5).map((notification) => (
                <DropdownMenuItem key={notification.id} className='flex flex-col items-start gap-1 p-4'>
                  <p className='text-sm font-medium'>{notification.title}</p>
                  <p className='text-xs text-muted-foreground'>{notification.timestamp}</p>
                </DropdownMenuItem>
              ))
            )}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon' className='relative'>
            <IconMail className='size-5' />
            <span className='absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground'>
              {messages.length}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-80'>
          <ScrollArea className='h-[250px] px-3'>
            {messages.length === 0 ? (
              <p className='py-4 text-center text-sm text-muted-foreground'>
                No new messages
              </p>
            ) : (
              messages.slice(0, 4).map((message) => (
                <DropdownMenuItem key={message.id} className='flex flex-col items-start gap-1 p-4'>
                  <p className='text-sm font-medium'>Message from {message.from}</p>
                  <p className='text-xs text-muted-foreground'>{message.timestamp}</p>
                </DropdownMenuItem>
              ))
            )}
          </ScrollArea>
          <div className='border-t p-2'>
            <Link
              to="/settings"
              className='block w-full rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90'
            >
              View All Messages
            </Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}