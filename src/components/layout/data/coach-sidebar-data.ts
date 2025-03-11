import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconChecklist,
  IconCalendarTime,
  IconChartLine,
  IconUsers,
  IconUserSearch,
  IconReportAnalytics,
  IconBrain,
  IconHeartRateMonitor,
  IconUserCog,
  IconBellRinging} from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const coachSidebarData: SidebarData = {
  user: {
    name: 'John Coach',
    email: 'j.coach@brickertape.com',
    avatar: '/avatars/coach.jpg',
  },
  teams: [
    { id: '1', name: 'Varsity Football', avatar: '/teams/football.png', plan: 'varsity' },
    { id: '2', name: 'JV Football', avatar: '/teams/football-jv.png', plan: 'junior-varsity' },
  ],
  navGroups: [
    {
      title: 'Dashboard',
      items: [
        {
          title: 'Team Overview',
          url: '/coach/overview',
          icon: IconUsers,
        },
        {
          title: 'Notifications',
          url: '/coach/notifications',
          icon: IconBellRinging,
        },
        {
          title: 'Calendar',
          url: '/coach/calendar',
          icon: IconCalendarTime,
        },
      ],
    },
    {
      title: 'Team Management',
      items: [
        {
          title: 'Roster',
          url: '/coach/team/roster',
          icon: IconUsers,
        },
        {
          title: 'Depth Chart',
          url: '/coach/team/depth-chart',
          icon: IconUserCog,
        },
        {
          title: 'Attendance',
          url: '/coach/team/attendance',
          icon: IconChecklist,
        },
        // REMOVED TRAINING NAVIGATION ITEM
      ],
    },
    {
      title: 'Performance',
      items: [
        {
          title: 'Statistics',
          url: '/coach/performance/stats',
          icon: IconChartLine,
        },
        {
          title: 'Player Development',
          url: '/coach/performance/development',
          icon: IconBrain,
        },
        {
          title: 'Reports',
          url: '/coach/performance/reports',
          icon: IconReportAnalytics,
        },
      ],
    },
    {
      title: 'Training',
      items: [
        {
          title: 'Practice Plans',
          url: '/coach/training/practice',
          icon: IconChecklist,
        },
        {
          title: 'Drills Library',
          url: '/coach/training/drills',
          icon: IconBrain,
        },
        {
          title: 'Conditioning',
          url: '/coach/training/conditioning',
          icon: IconHeartRateMonitor,
        },
      ],
    },
    {
      title: 'Game Planning',
      items: [

        {
          title: 'Scouting Reports',
          url: '/coach/games/scouting',
          icon: IconUserSearch,
        },
        {
          title: 'Film Review',
          url: '/coach/games/film',
          icon: IconBrowserCheck,
        },
      ],
    },
    {
      title: 'Health & Safety',
      items: [
        {
          title: 'Injury Reports',
          url: '/coach/health/injuries',
          icon: IconHeartRateMonitor,
        },
        {
          title: 'Return to Play',
          url: '/coach/health/return',
          icon: IconBrowserCheck,
        },
        {
          title: 'Protocols',
          url: '/coach/health/protocols',
          icon: IconBarrierBlock,
        },
      ],
    },
  ],
}