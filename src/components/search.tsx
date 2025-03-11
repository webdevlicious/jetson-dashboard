import { IconSearch } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { useSearch } from '@/context/search-context'
import { Button } from './ui/button'

interface Props {
  className?: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
}

export function Search({ className = '', placeholder = 'Search' }: Props) {
  const { setOpen } = useSearch()
  return (
    <div className="flex justify-center w-full max-w-2xl mx-auto">
      <Button
        variant='outline'
        className={cn(
          'relative h-8 w-full justify-start rounded-md bg-muted/25 text-sm font-normal text-muted-foreground shadow-none hover:bg-muted/50 sm:w-80',
          className
        )}
        onClick={() => setOpen(true)}
      >
        <IconSearch
          aria-hidden='true'
          className='absolute left-1.5 top-1/2 -translate-y-1/2'
        />
        <span className='ml-6'>{placeholder}</span>
      </Button>
    </div>
  )
}
