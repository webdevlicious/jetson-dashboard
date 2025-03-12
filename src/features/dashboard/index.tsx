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
import { OwnerDashboard } from './owner-dashboard'
import { ParentDashboard } from './parent-dashboard'
import { ScoutDashboard } from './scout-dashboard'
import { TrainerDashboard } from './trainer-dashboard'
import { TemplateDashboard } from './template-dashboard'
// import { Overview } from './components/overview'
// import { RecentSales } from './components/recent-sales'

export default function Dashboard() {
  const user = useAuthStore((state) => state.auth.user)
  const userRole = user?.role[0] || 'athlete' // Default to athlete if no role

  // Render the appropriate dashboard based on user role
  switch (userRole) {
    case 'athlete':
      return <AthleteDashboard />
    case 'coach':
      return <CoachDashboard />
    case 'counselor':
      return <CounselorDashboard />
    case 'trainer':
      return <TrainerDashboard />
    case 'scout':
      return <ScoutDashboard />
    case 'developer':
      return <DeveloperDashboard />
    case 'parent':
      return <ParentDashboard />
    case 'owner':
      return <OwnerDashboard />
    default:
      return <TemplateDashboard />
  }
}
