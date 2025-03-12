import { Link } from '@tanstack/react-router'
import { IconMenu } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface ManagerTopMenuProps extends React.HTMLAttributes<HTMLElement> {
  links?: {
    title: string
    href: string
    isActive: boolean
    disabled?: boolean
  }[]
}

// Default navigation items for manager dashboard
const defaultLinks = [
  { title: 'Overview', href: '/dashboard', isActive: true, disabled: false },
  { title: 'Team Performance', href: '/dashboard/team-performance', isActive: false, disabled: false },
  { title: 'Staff Management', href: '/dashboard/staff', isActive: false, disabled: false },
  { title: 'Budget', href: '/dashboard/budget', isActive: false, disabled: false },
  { title: 'Reports', href: '/dashboard/reports', isActive: false, disabled: false },
  { title: 'Settings', href: '/dashboard/settings', isActive: false, disabled: false },
]

export function ManagerTopMenu({ className, links = defaultLinks, ...props }: ManagerTopMenuProps) {
  return (
    <>
      <div className='md:hidden'>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button size='icon' variant='outline'>
              <IconMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side='bottom' align='start'>
            {links.map(({ title, href, isActive, disabled }) => (
              <DropdownMenuItem key={`${title}-${href}`} asChild>
                <Link
                  to={href}
                  className={!isActive ? 'text-muted-foreground' : ''}
                  disabled={disabled}
                >
                  {title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav
        className={cn(
          'hidden items-center space-x-4 md:flex lg:space-x-6',
          className
        )}
        {...props}
      >
        {links.map(({ title, href, isActive, disabled }) => (
          <Link
            key={`${title}-${href}`}
            to={href}
            disabled={disabled}
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? '' : 'text-muted-foreground'}`}
          >
            {title}
          </Link>
        ))}
      </nav>
    </>
  )
}