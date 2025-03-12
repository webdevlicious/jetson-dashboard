import { IconCoin, IconUsers, IconUserPlus, IconUserMinus, IconChartBar, IconChartLine } from '@tabler/icons-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { BaseDashboard } from './base-dashboard'
import { BarChart, LineChart } from '@/components/ui/charts'

export function OwnerDashboard() {
  return (
    <BaseDashboard
      title="Platform Administration"
      description="Comprehensive overview of your platform's performance and user metrics."
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Users
          </CardTitle>
          <IconUsers className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2,350</div>
          <p className="text-xs text-muted-foreground">
            +180 from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            New Subscribers
          </CardTitle>
          <IconUserPlus className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">
            +201 from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Cancellations
          </CardTitle>
          <IconUserMinus className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">-42</div>
          <p className="text-xs text-muted-foreground">
            -18 from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Monthly Revenue
          </CardTitle>
          <IconCoin className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      {/* Revenue Analytics */}
      <Card className='col-span-4'>
        <CardHeader>
          <CardTitle className='text-sm font-medium'>Revenue Analytics</CardTitle>
          <CardDescription>Monthly revenue breakdown</CardDescription>
          <IconChartBar className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <BarChart
            data={[
              { name: 'Jan', total: 42350 },
              { name: 'Feb', total: 39800 },
              { name: 'Mar', total: 45231 },
              { name: 'Apr', total: 48560 },
              { name: 'May', total: 46450 },
              { name: 'Jun', total: 50670 },
            ]}
          />
        </CardContent>
      </Card>

      {/* User Growth */}
      <Card className='col-span-4'>
        <CardHeader>
          <CardTitle className='text-sm font-medium'>User Growth</CardTitle>
          <CardDescription>New registrations over time</CardDescription>
          <IconChartLine className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <LineChart
            data={[
              { name: 'Week 1', total: 145 },
              { name: 'Week 2', total: 234 },
              { name: 'Week 3', total: 289 },
              { name: 'Week 4', total: 342 },
              { name: 'Week 5', total: 389 },
              { name: 'Week 6', total: 456 },
            ]}
          />
        </CardContent>
      </Card>

      {/* User Distribution */}
      <Card className='col-span-2'>
        <CardHeader>
          <CardTitle className='text-sm font-medium'>User Distribution</CardTitle>
          <CardDescription>By role type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <span className='text-sm'>Athletes</span>
              <span className='text-sm font-medium'>1,234 (43%)</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm'>Parents</span>
              <span className='text-sm font-medium'>856 (30%)</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm'>Coaches</span>
              <span className='text-sm font-medium'>432 (15%)</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm'>Scouts</span>
              <span className='text-sm font-medium'>234 (8%)</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm'>Others</span>
              <span className='text-sm font-medium'>89 (4%)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card className='col-span-2'>
        <CardHeader>
          <CardTitle className='text-sm font-medium'>System Status</CardTitle>
          <CardDescription>Platform health metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <span className='text-sm'>Server Uptime</span>
              <span className='text-sm font-medium'>99.9%</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm'>Response Time</span>
              <span className='text-sm font-medium'>245ms</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm'>Error Rate</span>
              <span className='text-sm font-medium'>0.1%</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm'>Active Sessions</span>
              <span className='text-sm font-medium'>1,245</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </BaseDashboard>
  )
}