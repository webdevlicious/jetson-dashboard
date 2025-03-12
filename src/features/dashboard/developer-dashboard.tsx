import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { DeveloperTopMenu } from './components/developer-topMenu'

// const topNav = [
//   { title: 'Overview', href: '/dashboard', isActive: true, disabled: false },
//   { title: 'Projects', href: '/dashboard/projects', isActive: false, disabled: false },
//   { title: 'Skills', href: '/dashboard/skills', isActive: false, disabled: false },
//   { title: 'Settings', href: '/dashboard/settings', isActive: false, disabled: false },
// ]

export function DeveloperDashboard() {
  return (
    <>
      <Header>
        <DeveloperTopMenu />
        <div className='flex items-center ml-auto space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      
      <Main>
        <div className='flex justify-between items-center mb-2 space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Developer Dashboard</h1>
          <p className='text-muted-foreground'>Track your development metrics and opportunities</p>
        </div>
        
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Active Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>12</div>
          <p className='text-xs text-muted-foreground'>+3 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Skills Endorsed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>48</div>
          <p className='text-xs text-muted-foreground'>+15 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Job Matches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>156</div>
          <p className='text-xs text-muted-foreground'>+25% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Profile Views</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>892</div>
          <p className='text-xs text-muted-foreground'>+42 since last week</p>
        </CardContent>
      </Card>
        </div>
      </Main>
    </>
  )
}