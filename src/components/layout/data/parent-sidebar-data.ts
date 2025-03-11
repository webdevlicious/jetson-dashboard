import {
  IconBellRinging,
  IconBrain,
  IconCalendarTime,
  IconChecklist,
  IconCreditCard,
  IconReportAnalytics,
  IconSchool,
  IconSettings,
  IconTrophy,
  IconUserCog,
  IconUsers
} from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const parentSidebarData: SidebarData = {
  user: {
    name: 'David Parent',
    email: 'd.parent@brickertape.com',
    avatar: '/avatars/parent.jpg',
  },
  teams: [],
  navGroups: [
    {
      title: 'Dashboard',
      items: [
        {
          title: 'Family Overview',
          url: '/parent/overview',
          icon: IconUsers,
        },
        {
          title: 'Notifications',
          url: '/parent/notifications',
          icon: IconBellRinging,
        },
        {
          title: 'Calendar',
          url: '/parent/calendar',
          icon: IconCalendarTime,
        },
      ],
    },
    {
      title: 'Children',
      items: [
        {
          title: 'Child Management',
          url: '/parent/children',
          icon: IconUserCog,
        },
        {
          title: 'Academic Progress',
          url: '/parent/academic',
          icon: IconSchool,
        },
        {
          title: 'Activity Tracking',
          url: '/parent/activities',
          icon: IconChecklist,
        },
      ],
    },
    {
      title: 'Performance',
      items: [
        {
          title: 'Progress Reports',
          url: '/parent/reports',
          icon: IconReportAnalytics,
        },
        {
          title: 'Achievements',
          url: '/parent/achievements',
          icon: IconTrophy,
        },
        {
          title: 'Development',
          url: '/parent/development',
          icon: IconBrain,
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          title: 'Account Settings',
          url: '/parent/settings/account',
          icon: IconSettings,
        },
        {
          title: 'Billing',
          url: '/parent/billing',
          icon: IconCreditCard,
        },
      ],
    },
  ],
}