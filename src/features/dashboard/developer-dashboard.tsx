import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BaseDashboard } from './base-dashboard'

// const topNav = [
//   { title: 'Overview', href: '/dashboard', isActive: true, disabled: false },
//   { title: 'Projects', href: '/dashboard/projects', isActive: false, disabled: false },
//   { title: 'Skills', href: '/dashboard/skills', isActive: false, disabled: false },
//   { title: 'Settings', href: '/dashboard/settings', isActive: false, disabled: false },
// ]

export function DeveloperDashboard() {
  return (
    <BaseDashboard
      title='Developer Dashboard'
      description='Track your development metrics and opportunities'
      // topNav={topNav}
    >
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
    </BaseDashboard>
  )
}