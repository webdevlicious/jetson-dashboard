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

interface ParentTopMenuProps extends React.HTMLAttributes<HTMLElement> {
  links?: {
    title: string
    href: string
    isActive: boolean
    disabled?: boolean
  }[]
}

// Default navigation items for parent dashboard
const defaultLinks = [
  { title: 'Overview', href: '/dashboard', isActive: true, disabled: false },
  { title: 'Student Progress', href: '/dashboard/student-progress', isActive: false, disabled: false },
  { title: 'Academic Records', href: '/dashboard/academic-records', isActive: false, disabled: false },
  { title: 'College Planning', href: '/dashboard/college-planning', isActive: false, disabled: false },
  { title: 'Communications', href: '/dashboard/communications', isActive: false, disabled: false },
  { title: 'Settings', href: '/dashboard/settings', isActive: false, disabled: false },
]

export function ParentTopMenu({ className, links = defaultLinks, ...props }: ParentTopMenuProps) {
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