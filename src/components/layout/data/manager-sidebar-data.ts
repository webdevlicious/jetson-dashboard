import {
  IconBarrierBlock,
  IconBellRinging,
  IconBrain,
  IconBrowserCheck,
  IconCalendarTime,
  IconChartLine,
  IconCreditCard,
  IconDashboard,
  IconFileInvoice,
  IconReportAnalytics,
  IconSettings,
  IconUserCog,
  IconUsers,
  IconUsersGroup,
  IconUserShield,
  IconChartBar,
  IconChartPie,
  IconBuildingStore,
  IconUserPlus,
  IconUserMinus,
  IconAlertCircle
} from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const managerSidebarData: SidebarData = {
  user: {
    name: 'Mike Manager',
    email: 'm.manager@brickertape.com',
    avatar: '/avatars/manager.jpg',
  },
  teams: [
    { id: '1', name: 'Platform Management', avatar: '/teams/management.png', plan: 'platform-management' },
  ],
  navGroups: [
    {
      title: 'Dashboard',
      items: [
        {
          title: 'Platform Overview',
          url: '/manager/overview',
          icon: IconDashboard,
        },
        {
          title: 'Notifications',
          url: '/manager/notifications',
          icon: IconBellRinging,
        },
        {
          title: 'System Alerts',
          url: '/manager/alerts',
          icon: IconAlertCircle,
        },
      ],
    },
    {
      title: 'User Management',
      items: [
        {
          title: 'All Users',
          url: '/manager/users',
          icon: IconUsers,
        },
        {
          title: 'User Activity',
          url: '/manager/user-activity',
          icon: IconUserCog,
        },
      ],
    },
    {
      title: 'Analytics',
      items: [
        {
          title: 'User Retention',
          url: '/manager/analytics/retention',
          icon: IconChartLine,
        },
        {
          title: 'Sales Performance',
          url: '/manager/analytics/sales',
          icon: IconChartBar,
        },
        {
          title: 'Subscription Growth',
          url: '/manager/analytics/subscriptions',
          icon: IconChartPie,
        },
        {
          title: 'Cancellation Rates',
          url: '/manager/analytics/cancellations',
          icon: IconUserMinus,
        },
      ],
    },
    {
      title: 'Business',
      items: [
        {
          title: 'Revenue Reports',
          url: '/manager/business/revenue',
          icon: IconCreditCard,
        },
        {
          title: 'Prospect Pipeline',
          url: '/manager/business/prospects',
          icon: IconUserPlus,
        },
        {
          title: 'Market Analysis',
          url: '/manager/business/market',
          icon: IconBuildingStore,
        },
      ],
    },
    {
      title: 'Reports',
      items: [
        {
          title: 'System Performance',
          url: '/manager/reports/system',
          icon: IconBrain,
        },
        {
          title: 'Custom Reports',
          url: '/manager/reports/custom',
          icon: IconFileInvoice,
        },
        {
          title: 'Audit Logs',
          url: '/manager/reports/audit',
          icon: IconReportAnalytics,
        },
      ],
    },
    {
      title: 'Configuration',
      items: [
        {
          title: 'Feature Management',
          url: '/manager/config/features',
          icon: IconBrowserCheck,
        },
        {
          title: 'Security Settings',
          url: '/manager/config/security',
          icon: IconBarrierBlock,
        },
      ],
    },
  ],
}