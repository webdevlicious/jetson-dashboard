// import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { useAuthStore } from '@/stores/authStore'
import { AthleteDashboard } from './athlete-dashboard'
import { CoachDashboard } from './coach-dashboard'
import { CounselorDashboard } from './counselor-dashboard'
import { DeveloperDashboard } from './developer-dashboard'
import { TrainerDashboard } from './trainer-dashboard'
import { TemplateDashboard } from './template-dashboard'
// import { Overview } from './components/overview'
// import { RecentSales } from './components/recent-sales'

export default function Dashboard() {
  const user = useAuthStore((state) => state.auth.user)
  const userRole = user?.role[0] || 'athlete' // Default to athlete if no role

  const renderDashboard = () => {
    switch (userRole) {
      case 'athlete':
        return <AthleteDashboard />
      case 'coach':
        return <CoachDashboard />
      case 'counselor':
        return <CounselorDashboard />
      case 'trainer':
        return <TrainerDashboard />
      case 'developer':
        return <DeveloperDashboard />
      default:
        return <TemplateDashboard />
    }
  }

  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <TopNav links={topNav} />
        <div className='flex items-center ml-auto space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main ===== */}
      <Main>
        {renderDashboard()}
      </Main>
    </>
  )
}

const topNav = [
  {
    title: 'Overview',
    href: '/dashboard',
    isActive: true,
    disabled: false,
  },
  {
    title: 'Performance',
    href: '/dashboard/performance',
    isActive: false,
    disabled: false,
  },
  {
    title: 'Training',
    href: '/dashboard/training',
    isActive: false,
    disabled: false,
  },
  {
    title: 'College Search',
    href: '/dashboard/college-search',
    isActive: false,
    disabled: false,
  }
]
