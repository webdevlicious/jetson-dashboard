import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BaseDashboard } from './base-dashboard'

// const topNav = [
//   { title: 'Overview', href: '/dashboard', isActive: true, disabled: false },
//   { title: 'Clients', href: '/dashboard/clients', isActive: false, disabled: false },
//   { title: 'Programs', href: '/dashboard/programs', isActive: false, disabled: false },
//   { title: 'Schedule', href: '/dashboard/schedule', isActive: false, disabled: false },
//   { title: 'Progress', href: '/dashboard/progress', isActive: false, disabled: false },
//   { title: 'Settings', href: '/dashboard/settings', isActive: false, disabled: false },
// ]

export function TrainerDashboard() {
  return (
    <BaseDashboard
      title='Trainer Dashboard'
      description='Manage your clients and training programs'
      // topNav={topNav}
    >
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Active Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>32</div>
          <p className='text-xs text-muted-foreground'>+4 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Training Programs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>15</div>
          <p className='text-xs text-muted-foreground'>+2 new programs</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Sessions This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>48</div>
          <p className='text-xs text-muted-foreground'>85% completion rate</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Client Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>78%</div>
          <p className='text-xs text-muted-foreground'>+5% this month</p>
        </CardContent>
      </Card>
    </BaseDashboard>
  )
}