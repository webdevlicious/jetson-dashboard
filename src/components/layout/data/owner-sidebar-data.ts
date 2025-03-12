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
  IconTrophy,
  IconUserCog,
  IconUsers,
  IconUsersGroup,
  IconUserShield,
  IconChartBar,
  IconChartPie,
  IconBuildingStore,
  IconCoin,
  IconUserPlus,
  IconUserMinus,
  IconAlertCircle
} from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const ownerSidebarData: SidebarData = {
  user: {
    name: 'Alex Owner',
    email: 'a.owner@brickertape.com',
    avatar: '/avatars/owner.jpg',
  },
  teams: [
    { id: '1', name: 'Platform Administration', avatar: '/teams/admin.png', plan: 'platform-admin' },
  ],
  navGroups: [
    {
      title: 'Dashboard',
      items: [
        {
          title: 'Platform Overview',
          url: '/owner/overview',
          icon: IconDashboard,
        },
        {
          title: 'Notifications',
          url: '/owner/notifications',
          icon: IconBellRinging,
        },
        {
          title: 'System Alerts',
          url: '/owner/alerts',
          icon: IconAlertCircle,
        },
      ],
    },
    {
      title: 'User Management',
      items: [
        {
          title: 'All Users',
          url: '/owner/users',
          icon: IconUsers,
        },
        {
          title: 'Roles & Permissions',
          url: '/owner/roles',
          icon: IconUserShield,
        },
        {
          title: 'User Activity',
          url: '/owner/user-activity',
          icon: IconUserCog,
        },
      ],
    },
    {
      title: 'Analytics',
      items: [
        {
          title: 'User Retention',
          url: '/owner/analytics/retention',
          icon: IconChartLine,
        },
        {
          title: 'Sales Performance',
          url: '/owner/analytics/sales',
          icon: IconChartBar,
        },
        {
          title: 'Subscription Growth',
          url: '/owner/analytics/subscriptions',
          icon: IconChartPie,
        },
        {
          title: 'Cancellation Rates',
          url: '/owner/analytics/cancellations',
          icon: IconUserMinus,
        },
      ],
    },
    {
      title: 'Business',
      items: [
        {
          title: 'Revenue Reports',
          url: '/owner/business/revenue',
          icon: IconCoin,
        },
        {
          title: 'Billing Management',
          url: '/owner/business/billing',
          icon: IconCreditCard,
        },
        {
          title: 'Prospect Pipeline',
          url: '/owner/business/prospects',
          icon: IconUserPlus,
        },
        {
          title: 'Market Analysis',
          url: '/owner/business/market',
          icon: IconBuildingStore,
        },
      ],
    },
    {
      title: 'Reports',
      items: [
        {
          title: 'System Performance',
          url: '/owner/reports/system',
          icon: IconBrain,
        },
        {
          title: 'Custom Reports',
          url: '/owner/reports/custom',
          icon: IconFileInvoice,
        },
        {
          title: 'Audit Logs',
          url: '/owner/reports/audit',
          icon: IconReportAnalytics,
        },
      ],
    },
    {
      title: 'Configuration',
      items: [
        {
          title: 'Platform Settings',
          url: '/owner/config/settings',
          icon: IconSettings,
        },
        {
          title: 'Feature Management',
          url: '/owner/config/features',
          icon: IconBrowserCheck,
        },
        {
          title: 'Security Controls',
          url: '/owner/config/security',
          icon: IconBarrierBlock,
        },
      ],
    },
  ],
}