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
import { athleteSidebarData } from './data/athlete-sidebar-data'
import { parentSidebarData } from './data/parent-sidebar-data'
import { scoutSidebarData } from './data/scout-sidebar-data'
import { coachSidebarData } from './data/coach-sidebar-data'
import { trainerSidebarData } from './data/trainer-sidebar-data'
import { DashboardType, isDashboardWithTeamSwitcher } from './types/dashboard'

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  dashboardType?: DashboardType
}

export function AppSidebar({ dashboardType = 'basic', ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible='icon' variant='floating' {...props}>
      <SidebarHeader>
        {isDashboardWithTeamSwitcher(dashboardType) && (
          <TeamSwitcher teams={(dashboardType === 'athlete' ? athleteSidebarData :
            dashboardType === 'parent' ? parentSidebarData :
            dashboardType === 'scout' ? scoutSidebarData :
            dashboardType === 'coach' ? coachSidebarData :
            dashboardType === 'trainer' ? trainerSidebarData :
            athleteSidebarData
          ).teams} />
        )}
      </SidebarHeader>
      <SidebarContent>
        {(dashboardType === 'athlete' ? athleteSidebarData :
          dashboardType === 'parent' ? parentSidebarData :
          dashboardType === 'scout' ? scoutSidebarData :
          dashboardType === 'coach' ? coachSidebarData :
          dashboardType === 'trainer' ? trainerSidebarData :
          athleteSidebarData
        ).navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={(dashboardType === 'athlete' ? athleteSidebarData :
          dashboardType === 'parent' ? parentSidebarData :
          dashboardType === 'scout' ? scoutSidebarData :
          dashboardType === 'coach' ? coachSidebarData :
          dashboardType === 'trainer' ? trainerSidebarData :
          athleteSidebarData
        ).user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
