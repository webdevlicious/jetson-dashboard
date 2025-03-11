import { LinkProps } from '@tanstack/react-router'

type RouteUrl = LinkProps['to']
  | '/parent/overview'
  | '/parent/notifications'
  | '/parent/calendar'
  | '/parent/children'
  | '/parent/children/add'
  | '/parent/children/access'
  | '/scout/overview'
  | '/scout/notifications'
  | '/scout/calendar'
  | '/scout/prospects'
  | '/scout/assessment'
  | '/scout/rankings'
  | '/scout/reports/scouting'
  | '/scout/reports/analysis'
  | '/scout/reports/recommendations'
  | '/scout/events/upcoming'
  | '/scout/events/reports'
  | '/scout/events/travel'
  | '/scout/communication/messages'
  | '/scout/communication/coaches'
  | '/scout/communication/parents'
  | '/scout/resources/compliance'
  | '/scout/resources/practices'
  | '/scout/resources/training'
  | '/coach/overview'
  | '/coach/notifications'
  | '/coach/calendar'
  | '/coach/team/roster'
  | '/coach/team/depth-chart'
  | '/coach/team/attendance'
  | '/coach/performance/stats'
  | '/coach/performance/development'
  | '/coach/performance/reports'
  | '/coach/training/practice'
  | '/coach/training/drills'
  | '/coach/training/conditioning'
  | '/coach/games/strategy'
  | '/coach/games/scouting'
  | '/coach/games/film'
  | '/coach/health/injuries'
  | '/coach/health/return'
  | '/coach/health/protocols'

interface User {
  name: string
  email: string
  avatar: string
}

interface Team {
  id?: string
  name: string
  avatar: string
  plan: string
}

interface BaseNavItem {
  title: string
  badge?: string
  icon?: React.ElementType
}

type NavLink = BaseNavItem & {
  url: RouteUrl
  items?: never
}

type NavCollapsible = BaseNavItem & {
  items: (BaseNavItem & { url: LinkProps['to'] })[]
  url?: never
}

type NavItem = NavCollapsible | NavLink

interface NavGroup {
  title: string
  items: NavItem[]
}

interface SidebarData {
  user: User
  teams: Team[]
  navGroups: NavGroup[]
}

interface Team {
  id?: string
  name: string
  avatar: string
}

export type { SidebarData, NavGroup, NavItem, NavCollapsible, NavLink }
