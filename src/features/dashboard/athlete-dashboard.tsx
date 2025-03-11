import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CalendarIcon, DollarSignIcon, TwitterIcon, InstagramIcon, TrendingUpIcon } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'

// const topNav = [
//   { title: 'Overview', href: '/dashboard', isActive: true, disabled: false },
//   { title: 'Performance', href: '/dashboard/performance', isActive: false, disabled: false },
//   { title: 'Teams', href: '/dashboard/teams', isActive: false, disabled: false },
//   { title: 'Training', href: '/dashboard/training', isActive: false, disabled: false },
//   { title: 'College Search', href: '/dashboard/college-search', isActive: false, disabled: false },
//   { title: 'Settings', href: '/dashboard/settings', isActive: false, disabled: false },
// ]

export function AthleteDashboard() {
  return (
    <>
      {/* <Header>
        <div className='flex items-center ml-auto space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header> */}

      <Main>
        <div className='flex justify-between items-center mb-2 space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Athlete Dashboard</h1>
          <p className='text-muted-foreground'>Track your athletic performance and opportunities</p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {/* First row - Original metrics */}
      <Card>
        <CardHeader className='flex flex-row justify-between items-center pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium'>Training Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>24</div>
          <p className='text-xs text-muted-foreground'>+8 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row justify-between items-center pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium'>Team Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>12</div>
          <p className='text-xs text-muted-foreground'>+3 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row justify-between items-center pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium'>Scout Views</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>45</div>
          <p className='text-xs text-muted-foreground'>+15% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row justify-between items-center pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium'>Performance Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>8.5</div>
          <p className='text-xs text-muted-foreground'>+0.3 since last week</p>
        </CardContent>
      </Card>

      {/* NIL Revenue Cards */}
      <Card className="col-span-2">
        <CardHeader className='flex flex-row justify-between items-center pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium'>NIL Revenue</CardTitle>
          <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>$12,450</div>
          <p className='text-xs text-muted-foreground'>+$2,100 from last quarter</p>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs">Sponsorships</span>
              <span className="text-xs font-medium">$8,200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs">Appearances</span>
              <span className="text-xs font-medium">$3,500</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs">Merchandise</span>
              <span className="text-xs font-medium">$750</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-2">
        <CardHeader className='flex flex-row justify-between items-center pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium'>NIL Projected Revenue</CardTitle>
          <TrendingUpIcon className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>$28,500</div>
          <p className='text-xs text-muted-foreground'>Projected for next 12 months</p>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs">Current Deals</span>
              <span className="text-xs font-medium">$15,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs">Pending Opportunities</span>
              <span className="text-xs font-medium">$8,500</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs">Potential Growth</span>
              <span className="text-xs font-medium">$5,000</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events/Camps */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Football camps and tournaments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-4">
            <CalendarIcon className="mt-1 w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Football Camp</p>
              <p className="text-sm text-muted-foreground">Jun 19, 2025 · 8:30a</p>
              <p className="text-sm">Mercer College</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CalendarIcon className="mt-1 w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Football Camp</p>
              <p className="text-sm text-muted-foreground">Jun 25, 2025 · 10:00a</p>
              <p className="text-sm">University of South Florida</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CalendarIcon className="mt-1 w-5 h-5 text-muted-foreground" />
            <div>
              <p className="font-medium">7v7 Tournament</p>
              <p className="text-sm text-muted-foreground">Jul 7, 2025 · 7:00a</p>
              <p className="text-sm">University of Central Florida</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Badge variant="outline" className="text-xs">View all events</Badge>
        </CardFooter>
      </Card>

      {/* Social Media Posts */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Social Media Posts</CardTitle>
          <CardDescription>Recent activity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/teams/football.png" alt="Instagram" />
              <AvatarFallback><InstagramIcon className="w-4 h-4" /></AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">Instagram</p>
                <Badge variant="secondary" className="text-xs">2 days ago</Badge>
              </div>
              <p className="text-sm text-muted-foreground">"Excited to announce my commitment to XYZ University.."</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/teams/football.png" alt="Twitter" />
              <AvatarFallback><TwitterIcon className="w-4 h-4" /></AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">Twitter</p>
                <Badge variant="secondary" className="text-xs">5 days ago</Badge>
              </div>
              <p className="text-sm text-muted-foreground">"Off to another training session. Let's get better today! 💪 #No.."</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/teams/football.png" alt="Twitter" />
              <AvatarFallback><TwitterIcon className="w-4 h-4" /></AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">Twitter</p>
                <Badge variant="secondary" className="text-xs">1 week ago</Badge>
              </div>
              <p className="text-sm text-muted-foreground">"Check out my latest workout routine! 🏈 #Fitness #Training.."</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Badge variant="outline" className="text-xs">View all posts</Badge>
        </CardFooter>
      </Card>

      {/* Message Notifications */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Message Notifications</CardTitle>
          <CardDescription>Recent communications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/avatars/coach.jpg" alt="Coach" />
              <AvatarFallback>HC</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">Coach Johnson</p>
                <Badge className="text-xs">New</Badge>
              </div>
              <p className="text-sm text-muted-foreground">"Great job at practice today! Let's review film tomorrow at 3pm."</p>
              <p className="text-xs text-muted-foreground">Today at 5:30pm</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/avatars/scout.jpg" alt="Scout" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">Recruiter Smith</p>
              </div>
              <p className="text-sm text-muted-foreground">"I was impressed with your performance last weekend. Can we schedule a call?"</p>
              <p className="text-xs text-muted-foreground">Yesterday at 2:15pm</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/avatars/trainer.jpg" alt="Trainer" />
              <AvatarFallback>PT</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">Personal Trainer</p>
              </div>
              <p className="text-sm text-muted-foreground">"Don't forget your nutrition plan for game day preparation."</p>
              <p className="text-xs text-muted-foreground">2 days ago</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Badge variant="outline" className="text-xs">View all messages</Badge>        
        </CardFooter>
        </Card>
        </div>
      </Main>
    </>
  )
}
