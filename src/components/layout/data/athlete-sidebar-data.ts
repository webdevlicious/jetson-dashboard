import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconCalendarTime,
  IconChartLine,
  IconUserSearch,
  IconReportAnalytics,
  IconSchool,
  IconBrain,
  IconHeartRateMonitor,
  IconBellRinging,
  IconTrophy
} from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const athleteSidebarData: SidebarData = {
  user: {
    name: 'Sam Athlete',
    email: 'sam.athlete@jetsonrecruit.com',
    avatar: '/avatars/athlete-profile.jpg',
  },
  teams: [
    { id: '1', name: 'Varsity Football', avatar: '/teams/football.png', plan: 'varsity' },
    { id: '2', name: 'Track & Field', avatar: '/teams/track.png', plan: 'track' },
  ],
  navGroups: [
    {
      title: 'Navigation',
      items: [
        {
          title: 'Dashboard',
          items: [
            {
              title: 'Performance Overview',
              url: '/athlete/overview',
              icon: IconChartLine,
            },
            {
              title: 'Notifications',
              url: '/athlete/notifications',
              icon: IconBellRinging,
            },
            {
              title: 'Calendar',
              url: '/athlete/calendar',
              icon: IconCalendarTime,
            },
          ],
        },
        {
          title: 'Performance',
          items: [
            {
              title: 'Statistics',
              url: '/athlete/performance/stats',
              icon: IconChartLine,
            },
            {
              title: 'Progress Tracking',
              url: '/athlete/performance/progress',
              icon: IconBrain,
            },
            {
              title: 'Goals',
              url: '/athlete/performance/goals',
              icon: IconTrophy,
            },
          ],
        },
        {
          title: 'Training',
          items: [
            {
              title: 'Workouts',
              url: '/athlete/training/workouts',
              icon: IconHeartRateMonitor,
            },
            {
              title: 'Schedule',
              url: '/athlete/training/schedule',
              icon: IconCalendarTime,
            },
            {
              title: 'Skills Development',
              url: '/athlete/training/skills',
              icon: IconBrain,
            },
          ],
        },
        {
          title: 'Academics',
          items: [
            {
              title: 'Grades',
              url: '/athlete/academics/grades',
              icon: IconSchool,
            },
            {
              title: 'Study Schedule',
              url: '/athlete/academics/schedule',
              icon: IconCalendarTime,
            },
            {
              title: 'Tutoring',
              url: '/athlete/academics/tutoring',
              icon: IconBrain,
            },
          ],
        },
        {
          title: 'Recruitment',
          items: [
            {
              title: 'College Interest',
              url: '/athlete/recruitment/interest',
              icon: IconUserSearch,
            },
            {
              title: 'Scout Reports',
              url: '/athlete/recruitment/reports',
              icon: IconReportAnalytics,
            },
            {
              title: 'Visit Schedule',
              url: '/athlete/recruitment/visits',
              icon: IconCalendarTime,
            },
          ],
        },
        {
          title: 'Health',
          items: [
            {
              title: 'Medical Records',
              url: '/athlete/health/records',
              icon: IconHeartRateMonitor,
            },
            {
              title: 'Injury Status',
              url: '/athlete/health/injuries',
              icon: IconBrowserCheck,
            },
            {
              title: 'Wellness',
              url: '/athlete/health/wellness',
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },
  ],
}
