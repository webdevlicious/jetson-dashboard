import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BaseDashboard } from './base-dashboard'

const topNav = [
  { title: 'Overview', href: '/dashboard' },
  { title: 'Team', href: '/dashboard/team' },
  { title: 'Players', href: '/dashboard/players' },
  { title: 'Training', href: '/dashboard/training' },
  { title: 'Analytics', href: '/dashboard/analytics' },
  { title: 'Settings', href: '/dashboard/settings' },
]

export function CoachDashboard() {
  return (
    <BaseDashboard
      title='Coach Dashboard'
      description='Manage your team and track player performance'
      topNav={topNav}
    >
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Team Size</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>28</div>
          <p className='text-xs text-muted-foreground'>+3 new players this month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Training Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>45</div>
          <p className='text-xs text-muted-foreground'>+8 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Team Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>85%</div>
          <p className='text-xs text-muted-foreground'>+12% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>6</div>
          <p className='text-xs text-muted-foreground'>Next event in 2 days</p>
        </CardContent>
      </Card>
    </BaseDashboard>
  )
}