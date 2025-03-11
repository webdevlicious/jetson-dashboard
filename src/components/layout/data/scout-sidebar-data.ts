import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconChecklist,
  IconCalendarTime,
  IconChartLine,
  IconUsers,
  IconUserSearch,
  IconBrain,
  IconRuler,
  IconTrophy,
  IconBellRinging,
  IconFileInvoice
} from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const scoutSidebarData: SidebarData = {
  user: {
    name: 'Mike Scout',
    email: 'm.scout@brickertape.com',
    avatar: '/avatars/scout.jpg',
  },
  teams: [
    { id: '1', name: 'Northeast Region', avatar: '/teams/region-ne.png', plan: 'northeast-region' },
    { id: '2', name: 'Southeast Region', avatar: '/teams/region-se.png', plan: 'southeast-region' },
  ],
  navGroups: [
    {
      title: 'Dashboard',
      items: [
        {
          title: 'Recruitment Overview',
          url: '/scout/overview',
          icon: IconUsers,
        },
        {
          title: 'Notifications',
          url: '/scout/notifications',
          icon: IconBellRinging,
        },
        {
          title: 'Calendar',
          url: '/scout/calendar',
          icon: IconCalendarTime,
        },
      ],
    },
    {
      title: 'Talent Evaluation',
      items: [
        {
          title: 'Prospect Database',
          url: '/scout/prospects',
          icon: IconUsers,
        },
        {
          title: 'Assessment Tools',
          url: '/scout/assessment',
          icon: IconRuler,
        },
        {
          title: 'Rankings',
          url: '/scout/rankings',
          icon: IconTrophy,
        },
      ],
    },
    {
      title: 'Reports',
      items: [
        {
          title: 'Scouting Reports',
          url: '/scout/reports/scouting',
          icon: IconFileInvoice,
        },
        {
          title: 'Performance Analysis',
          url: '/scout/reports/analysis',
          icon: IconChartLine,
        },
        {
          title: 'Recommendations',
          url: '/scout/reports/recommendations',
          icon: IconBrain,
        },
      ],
    },
    {
      title: 'Events',
      items: [
        {
          title: 'Upcoming Events',
          url: '/scout/events/upcoming',
          icon: IconCalendarTime,
        },
        {
          title: 'Event Reports',
          url: '/scout/events/reports',
          icon: IconFileInvoice,
        },
        {
          title: 'Travel Schedule',
          url: '/scout/events/travel',
          icon: IconChecklist,
        },
      ],
    },
    {
      title: 'Communication',
      items: [
        {
          title: 'Messages',
          url: '/scout/communication/messages',
          icon: IconBellRinging,
        },
        {
          title: 'Coach Network',
          url: '/scout/communication/coaches',
          icon: IconUserSearch,
        },
        {
          title: 'Parent Contact',
          url: '/scout/communication/parents',
          icon: IconUsers,
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          title: 'Compliance Guide',
          url: '/scout/resources/compliance',
          icon: IconBarrierBlock,
        },
        {
          title: 'Best Practices',
          url: '/scout/resources/practices',
          icon: IconBrowserCheck,
        },
        {
          title: 'Training Materials',
          url: '/scout/resources/training',
          icon: IconBrain,
        },
      ],
    },
  ],
}