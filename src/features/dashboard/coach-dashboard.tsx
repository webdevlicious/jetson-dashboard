import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Main } from '@/components/layout/main'
import { PerformanceChart } from './coach/performance-chart'

export function CoachDashboard() {
  return (
    <Main>
      <div className='flex justify-between items-center mb-2 space-y-2'>
        <h1 className='text-2xl font-bold tracking-tight'>Coach Dashboard</h1>
        <p className='text-muted-foreground'>Manage your team and track player performance</p>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {/* First row - Metrics */}
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

        {/* Performance Chart */}
        <PerformanceChart />
      </div>
    </Main>
  )
}