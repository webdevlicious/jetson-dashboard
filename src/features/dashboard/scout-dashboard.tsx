import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'
import { ScoutTopMenu } from './components/scout-topMenu'

// Sample data for athlete evaluation categories
const athleteData = [
  { name: 'Speed', value: 35 },
  { name: 'Strength', value: 25 },
  { name: 'Technique', value: 20 },
  { name: 'Game IQ', value: 15 },
  { name: 'Leadership', value: 5 }
]

const COLORS = ['var(--primary)', 'var(--secondary)', 'var(--accent)', 'var(--muted)', 'var(--card)']

export function ScoutDashboard() {
  return (
    <>
      <Header>
        <ScoutTopMenu />
        <div className='flex items-center ml-auto space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
      <div className='flex justify-between items-center mb-2 space-y-2'>
        <h1 className='text-2xl font-bold tracking-tight'>Scout Dashboard</h1>
        <p className='text-muted-foreground'>Track and evaluate athletic talent</p>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {/* First row - Metrics */}
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

        {/* Athlete Evaluation Chart */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Athlete Evaluation Criteria</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={athleteData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {athleteData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--background)', 
                    borderColor: 'var(--border)',
                    borderRadius: '6px',
                    boxShadow: 'var(--shadow)'
                  }}
                  formatter={(value) => [`${value}%`, 'Importance']}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </Main>
    </>
  )
}