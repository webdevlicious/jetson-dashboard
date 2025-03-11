import {
  IconCalendarTime,
  IconChartLine,
  IconHeartRateMonitor,
  IconUsers
} from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const trainerSidebarData: SidebarData = {
  user: {
    name: 'Alex Trainer',
    email: 'a.trainer@brickertape.com',
    avatar: '/avatars/trainer.jpg',
  },
  teams: [
    { id: '1', name: 'Strength & Conditioning', avatar: '/teams/strength.png', plan: 'strength-conditioning' },
  ],
  navGroups: [
    {
      title: 'Dashboard',
      items: [
        {
          title: 'Client Overview',
          url: '/trainer/overview',
          icon: IconUsers,
        },
        {
          title: 'Schedule',
          url: '/trainer/schedule',
          icon: IconCalendarTime,
        },
      ],
    },
    {
      title: 'Training Management',
      items: [
        {
          title: 'Program Design',
          url: '/trainer/training',
          icon: IconHeartRateMonitor,
        },
        {
          title: 'Progress Tracking',
          url: '/trainer/training/progress',
          icon: IconChartLine,
        },
      ],
    },
  ],
}
