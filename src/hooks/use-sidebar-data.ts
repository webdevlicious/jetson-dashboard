import { useAuthStore } from '@/stores/authStore'
import { athleteSidebarData } from '@/components/layout/data/athlete-sidebar-data'
import { parentSidebarData } from '@/components/layout/data/parent-sidebar-data'
import { scoutSidebarData } from '@/components/layout/data/scout-sidebar-data'
import { coachSidebarData } from '@/components/layout/data/coach-sidebar-data'
import { trainerSidebarData } from '@/components/layout/data/trainer-sidebar-data'
import { type SidebarData } from '@/components/layout/types'
import { DashboardType } from '@/components/layout/types/dashboard'

/**
 * Hook to get sidebar data based on the current user role
 * This allows the sidebar to dynamically update when the user type is switched
 */
export function useSidebarData(): {
  sidebarData: SidebarData
  dashboardType: DashboardType
} {
  const user = useAuthStore((state) => state.auth.user)
  const userRole = user?.role[0] as DashboardType || 'athlete' // Default to athlete if no role

  // Map user role to dashboard type
  const getDashboardType = (role: string): DashboardType => {
    switch (role) {
      case 'athlete':
      case 'coach':
      case 'parent':
      case 'scout':
      case 'trainer':
      case 'developer':
      case 'counselor':
        return role as DashboardType
      default:
        return 'basic'
    }
  }

  const dashboardType = getDashboardType(userRole)

  // Get sidebar data based on dashboard type
  const getSidebarData = (type: DashboardType): SidebarData => {
    switch (type) {
      case 'athlete':
        return athleteSidebarData
      case 'parent':
        return parentSidebarData
      case 'scout':
        return scoutSidebarData
      case 'coach':
        return coachSidebarData
      case 'trainer':
        return trainerSidebarData
      default:
        return athleteSidebarData // Default to athlete sidebar data
    }
  }

  return {
    sidebarData: getSidebarData(dashboardType),
    dashboardType
  }
}