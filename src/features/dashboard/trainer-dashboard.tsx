import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ClientProgressChart } from './trainer/client-progress-chart'
import { TrainerTopMenu } from './components/trainer-topMenu'

export function TrainerDashboard() {
  return (
    <>
      <Header>
        <TrainerTopMenu />
        <div className='flex items-center ml-auto space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
      <div className='flex justify-between items-center mb-2 space-y-2'>
        <h1 className='text-2xl font-bold tracking-tight'>Trainer Dashboard</h1>
        <p className='text-muted-foreground'>Manage your clients and training programs</p>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {/* First row - Metrics */}
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

        {/* Client Progress Chart */}
        <ClientProgressChart />
      </div>
    </Main>
    </>
  )
}