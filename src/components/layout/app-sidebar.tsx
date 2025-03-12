import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/components/layout/nav-group'
import { NavUser } from '@/components/layout/nav-user'
import { TeamSwitcher } from '@/components/layout/team-switcher'
import { useSidebarData } from '@/hooks/use-sidebar-data'
import { DashboardType, isDashboardWithTeamSwitcher } from './types/dashboard'

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  dashboardType?: DashboardType
}

export function AppSidebar({ dashboardType: propsDashboardType = 'basic', ...props }: AppSidebarProps) {
  // Use the sidebar data hook to get the current user's dashboard type and sidebar data
  const { sidebarData, dashboardType: userDashboardType } = useSidebarData()
  
  // Use the dashboard type from props if provided, otherwise use the one from the auth store
  const dashboardType = propsDashboardType !== 'basic' ? propsDashboardType : userDashboardType
  
  return (
    <Sidebar collapsible='icon' variant='floating' {...props}>
      <SidebarHeader>
        {isDashboardWithTeamSwitcher(dashboardType) && (
          <TeamSwitcher teams={sidebarData.teams} />
        )}
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
