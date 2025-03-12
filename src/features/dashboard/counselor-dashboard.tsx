import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { CounselorTopMenu } from './components/counselor-topMenu'

// const topNav = [
//   { title: 'Overview', href: '/dashboard', isActive: true, disabled: false },
//   { title: 'Students', href: '/dashboard/students', isActive: false, disabled: false },
//   { title: 'Appointments', href: '/dashboard/appointments', isActive: false, disabled: false },
//   { title: 'Resources', href: '/dashboard/resources', isActive: false, disabled: false },
//   { title: 'Reports', href: '/dashboard/reports', isActive: false, disabled: false },
//   { title: 'Settings', href: '/dashboard/settings', isActive: false, disabled: false },
// ]

export function CounselorDashboard() {
  return (
    <>
      <Header>
        <CounselorTopMenu />
        <div className='flex items-center ml-auto space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      
      <Main>
        <div className='flex justify-between items-center mb-2 space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Counselor Dashboard</h1>
          <p className='text-muted-foreground'>Guide and support student athletes</p>
        </div>
        
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Active Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>42</div>
          <p className='text-xs text-muted-foreground'>+5 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Scheduled Meetings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>18</div>
          <p className='text-xs text-muted-foreground'>Next meeting in 2 hours</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Resources Shared</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>156</div>
          <p className='text-xs text-muted-foreground'>+25% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Success Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>92%</div>
          <p className='text-xs text-muted-foreground'>+2% since last week</p>
        </CardContent>
      </Card>
        </div>
      </Main>
    </>
  )
}