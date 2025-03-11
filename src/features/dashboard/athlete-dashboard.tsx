import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BaseDashboard } from './base-dashboard'

const topNav = [
  { title: 'Overview', href: '/dashboard', isActive: true, disabled: false },
  { title: 'Performance', href: '/dashboard/performance', isActive: false, disabled: false },
  { title: 'Teams', href: '/dashboard/teams', isActive: false, disabled: false },
  { title: 'Training', href: '/dashboard/training', isActive: false, disabled: false },
  { title: 'Settings', href: '/dashboard/settings', isActive: false, disabled: false },
]

export function AthleteDashboard() {
  return (
    <BaseDashboard
      title='Athlete Dashboard'
      description='Track your athletic performance and opportunities'
      topNav={topNav}
    >
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Training Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>24</div>
          <p className='text-xs text-muted-foreground'>+8 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Team Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>12</div>
          <p className='text-xs text-muted-foreground'>+3 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Scout Views</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>45</div>
          <p className='text-xs text-muted-foreground'>+15% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Performance Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>8.5</div>
          <p className='text-xs text-muted-foreground'>+0.3 since last week</p>
        </CardContent>
      </Card>
    </BaseDashboard>
  )
}