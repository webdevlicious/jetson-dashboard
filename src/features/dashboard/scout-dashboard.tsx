import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BaseDashboard } from './base-dashboard'

// const topNav = [
//   { title: 'Overview', href: '/dashboard' },
//   { title: 'Athletes', href: '/dashboard/athletes' },
//   { title: 'Reports', href: '/dashboard/reports' },
//   { title: 'Events', href: '/dashboard/events' },
//   { title: 'Settings', href: '/dashboard/settings' },
// ]

export function ScoutDashboard() {
  return (
    <BaseDashboard
      title='Scout Dashboard'
      description='Track and evaluate athletic talent'
      // topNav={topNav}
    >
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Athletes Scouted</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>156</div>
          <p className='text-xs text-muted-foreground'>+28 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Active Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>42</div>
          <p className='text-xs text-muted-foreground'>+12 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>8</div>
          <p className='text-xs text-muted-foreground'>Next event in 3 days</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>24</div>
          <p className='text-xs text-muted-foreground'>+6 this week</p>
        </CardContent>
      </Card>
    </BaseDashboard>
  )
}