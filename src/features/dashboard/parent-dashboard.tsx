import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CalendarIcon, BookOpenIcon, TrendingUpIcon, ActivityIcon } from 'lucide-react'
import { BaseDashboard } from './base-dashboard'
import { IconCalendar } from '@tabler/icons-react'

export function ParentDashboard() {
  return (
    <BaseDashboard
      title='Parent Dashboard'
      description="Monitor your athlete\'s progress and activities"
    >
      {/* Academic & Athletic Performance */}
      <Card>
        <CardHeader className='flex flex-row justify-between items-center pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium'>GPA</CardTitle>
          <BookOpenIcon className='w-4 h-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>3.8</div>
          <p className='text-xs text-muted-foreground'>+0.2 from last semester</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row justify-between items-center pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium'>Athletic Performance</CardTitle>
          <ActivityIcon className='w-4 h-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>8.5/10</div>
          <p className='text-xs text-muted-foreground'>+0.3 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row justify-between items-center pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium'>Training Hours</CardTitle>
          <TrendingUpIcon className='w-4 h-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>24</div>
          <p className='text-xs text-muted-foreground'>+4 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row justify-between items-center pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium'>Attendance</CardTitle>
          <CalendarIcon className='w-4 h-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>98%</div>
          <p className='text-xs text-muted-foreground'>+2% from last month</p>
        </CardContent>
      </Card>

      {/* Academic Progress */}
      <Card className='col-span-2'>
        <CardHeader>
          <CardTitle>Academic Progress</CardTitle>
          <CardDescription>Current semester grades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex justify-between items-center'>
              <span className='text-sm'>Mathematics</span>
              <span className='text-sm font-medium'>A (95%)</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm'>English</span>
              <span className='text-sm font-medium'>A- (92%)</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm'>Science</span>
              <span className='text-sm font-medium'>B+ (88%)</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm'>History</span>
              <span className='text-sm font-medium'>A (94%)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Athletic Development */}
      <Card className='col-span-2'>
        <CardHeader>
          <CardTitle>Athletic Development</CardTitle>
          <CardDescription>Performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex justify-between items-center'>
              <span className='text-sm'>Speed</span>
              <span className='text-sm font-medium'>8.5/10</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm'>Strength</span>
              <span className='text-sm font-medium'>7.8/10</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm'>Agility</span>
              <span className='text-sm font-medium'>8.2/10</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm'>Endurance</span>
              <span className='text-sm font-medium'>8.0/10</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card className='col-span-2'>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Schedule and important dates</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex items-start space-x-4'>
            <IconCalendar className='mt-1 w-5 h-5 text-muted-foreground' />
            <div>
              <p className='font-medium'>Parent-Coach Meeting</p>
              <p className='text-sm text-muted-foreground'>Jun 15, 2024 · 3:00p</p>
              <p className='text-sm'>Virtual Meeting</p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <IconCalendar className='mt-1 w-5 h-5 text-muted-foreground' />
            <div>
              <p className='font-medium'>Tournament</p>
              <p className='text-sm text-muted-foreground'>Jun 20, 2024 · 9:00a</p>
              <p className='text-sm'>City Sports Complex</p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <IconCalendar className='mt-1 w-5 h-5 text-muted-foreground' />
            <div>
              <p className='font-medium'>Academic Review</p>
              <p className='text-sm text-muted-foreground'>Jun 25, 2024 · 2:00p</p>
              <p className='text-sm'>School Campus</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Badge variant='outline' className='text-xs'>View all events</Badge>
        </CardFooter>
      </Card>

      {/* Recent Communications */}
      <Card className='col-span-2'>
        <CardHeader>
          <CardTitle>Recent Communications</CardTitle>
          <CardDescription>Messages and updates</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='flex items-start space-x-4'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src='/teams/coach.png' alt='Coach' />
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <div>
              <div className='flex items-center space-x-2'>
                <p className='text-sm font-medium'>Coach Johnson</p>
                <Badge variant='secondary' className='text-xs'>2 days ago</Badge>
              </div>
              <p className='text-sm text-muted-foreground'>"Great progress in today's training session..."</p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src='/teams/teacher.png' alt='Teacher' />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <div>
              <div className='flex items-center space-x-2'>
                <p className='text-sm font-medium'>Mrs. Smith</p>
                <Badge variant='secondary' className='text-xs'>3 days ago</Badge>
              </div>
              <p className='text-sm text-muted-foreground'>"Excellent performance on the recent math test..."</p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src='/teams/counselor.png' alt='Counselor' />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div>
              <div className='flex items-center space-x-2'>
                <p className='text-sm font-medium'>Academic Advisor</p>
                <Badge variant='secondary' className='text-xs'>5 days ago</Badge>
              </div>
              <p className='text-sm text-muted-foreground'>"Schedule for next semester's course selection..."</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Badge variant='outline' className='text-xs'>View all messages</Badge>
        </CardFooter>
      </Card>
    </BaseDashboard>
  )
}