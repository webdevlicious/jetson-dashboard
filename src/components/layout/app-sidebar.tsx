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
import { sidebarData } from './data/sidebar-data'
import { DashboardType, isDashboardWithTeamSwitcher } from './types/dashboard'

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  dashboardType?: DashboardType
}

export function AppSidebar({ dashboardType = 'basic', ...props }: AppSidebarProps) {
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
