import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconChecklist,
  IconDashboard,
  IconCalendarTime,
  IconChartLine,
  IconUsers,
  IconUserSearch,
  IconReportAnalytics,
  IconSchool,
  IconBrain,
  IconHeartRateMonitor,
  IconSettings,
  IconUserCog,
  IconCreditCard,
  IconRuler,
  IconTrophy,
  IconBellRinging,
  IconFileInvoice
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
          title: 'Child Selector',
          url: '/parent/children',
          icon: IconUsers,
        },
        {
          title: 'Add Child',
          url: '/parent/children/add',
          icon: IconUserCog,
        },
        {
          title: 'Manage Access',
          url: '/parent/children/access',
          icon: IconBarrierBlock,
        },
      ],
    },
    {
      title: 'Performance',
      items: [
        {
          title: 'Academic',
          url: '/parent/academic',
          icon: IconSchool,
        },
        {
          title: 'Athletic',
          url: '/parent/activities',
          icon: IconTrophy,
        },
        {
          title: 'Development',
          url: '/parent/development',
          icon: IconBrain,
        },
        {
          title: 'Reports',
          url: '/parent/reports',
          icon: IconReportAnalytics,
        },
      ],
    },
    {
      title: 'Communication',
      items: [
        {
          title: 'Messages',
          url: '/communication/messages',
          icon: IconBellRinging,
        },
        {
          title: 'Coaches',
          url: '/parent/communication/coaches',
          icon: IconUserSearch,
        },
        {
          title: 'Counselors',
          url: '/parent/communication/counselors',
          icon: IconUserSearch,
        },
        {
          title: 'Announcements',
          url: '/parent/communication/announcements',
          icon: IconBellRinging,
        },
      ],
    },
    {
      title: 'Academics',
      items: [
        {
          title: 'Grades',
          url: '/parent/academics/grades',
          icon: IconSchool,
        },
        {
          title: 'Assignments',
          url: '/parent/academics/assignments',
          icon: IconChecklist,
        },
        {
          title: 'Study Resources',
          url: '/parent/academics/resources',
          icon: IconBrain,
        },
        {
          title: 'College Prep',
          url: '/parent/academics/college-prep',
          icon: IconSchool,
        },
      ],
    },
    {
      title: 'College',
      items: [
        {
          title: 'Recruitment',
          url: '/parent/college/recruitment',
          icon: IconUserSearch,
        },
        {
          title: 'Opportunities',
          url: '/parent/college/opportunities',
          icon: IconTrophy,
        },
        {
          title: 'Visits',
          url: '/parent/college/visits',
          icon: IconCalendarTime,
        },
        {
          title: 'Applications',
          url: '/parent/college/applications',
          icon: IconFileInvoice,
        },
      ],
    },
    {
      title: 'Health',
      items: [
        {
          title: 'Medical Records',
          url: '/parent/health/records',
          icon: IconHeartRateMonitor,
        },
        {
          title: 'Injury Tracking',
          url: '/parent/health/injuries',
          icon: IconHeartRateMonitor,
        },
        {
          title: 'Treatment Plans',
          url: '/parent/health/treatments',
          icon: IconBrain,
        },
        {
          title: 'Wellness',
          url: '/parent/health/wellness',
          icon: IconHeartRateMonitor,
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          title: 'How to Get Recruited',
          url: '/parent/resources/recruitment-guide',
          icon: IconUserSearch,
        },
        {
          title: 'Camps',
          url: '/parent/resources/camps',
          icon: IconTrophy,
        },
        {
          title: 'Scholarships',
          url: '/parent/resources/scholarships',
          icon: IconSchool,
        },
        {
          title: 'Eligibility',
          url: '/parent/resources/eligibility',
          icon: IconChecklist,
        },
        {
          title: 'Blog',
          url: '/parent/resources/blog',
          icon: IconFileInvoice,
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          title: 'Account',
          url: '/parent/settings/account',
          icon: IconUserCog,
        },
        {
          title: 'Preferences',
          url: '/parent/settings/preferences',
          icon: IconSettings,
        },
        {
          title: 'Notifications',
          url: '/parent/settings/notifications',
          icon: IconBellRinging,
        },
        {
          title: 'Payment',
          url: '/parent/settings/payment',
          icon: IconCreditCard,
        },
      ],
    },
  ],
}

export const athleteSidebarData: SidebarData = {
  user: {
    name: 'Allison Jefferson',
    email: 'a.jefferson@brickertape.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [],
  navGroups: [
    {
      title: 'Dashboard',
      items: [
        {
          title: 'My Performance',
          url: '/dashboard/overview',
          icon: IconChartLine,
        },
        {
          title: 'Notifications',
          url: '/dashboard/notifications',
          icon: IconBellRinging,
        },
        {
          title: 'Goals',
          url: '/dashboard/goals',
          icon: IconTrophy,
        },
        {
          title: 'Calendar',
          url: '/dashboard/calendar',
          icon: IconCalendarTime,
        },
      ],
    },
    {
      title: 'Training',
      items: [
        {
          title: 'Daily Plan',
          url: '/training/daily',
          icon: IconChecklist,
        },
        {
          title: 'Weekly Overview',
          url: '/training/weekly',
          icon: IconCalendarTime,
        },
        {
          title: 'Exercise Library',
          url: '/training/exercises',
          icon: IconBarrierBlock,
        },
        {
          title: 'Completed Workouts',
          url: '/training/history',
          icon: IconDashboard,
        },
      ],
    },
    {
      title: 'Performance',
      items: [
        {
          title: 'Statistics',
          url: '/performance/stats',
          icon: IconRuler,
        },
        {
          title: 'Progress',
          url: '/performance/progress',
          icon: IconChartLine,
        },
        {
          title: 'Assessments',
          url: '/performance/assessments',
          icon: IconBrain,
        },
        {
          title: 'Video Analysis',
          url: '/performance/video',
          icon: IconBrowserCheck,
        },
      ],
    },
    {
      title: 'Communication',
      items: [
        {
          title: 'Messages',
          url: '/communication/messages',
          icon: IconBellRinging,
        },
        {
          title: 'Team',
          url: '/communication/team',
          icon: IconUsers,
        },
        {
          title: 'Coaches',
          url: '/communication/coaches',
          icon: IconUserSearch,
        },
        {
          title: 'Parents',
          url: '/communication/parents',
          icon: IconUsers,
        },
      ],
    },
    {
      title: 'College',
      items: [
        {
          title: 'My Profile',
          url: '/college/profile',
          icon: IconUserCog,
        },
        {
          title: 'Interested Programs',
          url: '/college/programs',
          icon: IconSchool,
        },
        {
          title: 'Visits',
          url: '/college/visits',
          icon: IconCalendarTime,
        },
        {
          title: 'Applications',
          url: '/college/applications',
          icon: IconFileInvoice,
        },
      ],
    },
    {
      title: 'NIL',
      items: [
        {
          title: 'Opportunities',
          url: '/nil/opportunities',
          icon: IconTrophy,
        },
        {
          title: 'My Brand',
          url: '/nil/brand',
          icon: IconUserCog,
        },
        {
          title: 'Contracts',
          url: '/nil/contracts',
          icon: IconFileInvoice,
        },
        {
          title: 'Performance',
          url: '/nil/performance',
          icon: IconChartLine,
        },
      ],
    },
    {
      title: 'Health',
      items: [
        {
          title: 'Status',
          url: '/health/status',
          icon: IconHeartRateMonitor,
        },
        {
          title: 'Injuries',
          url: '/health/injuries',
          icon: IconBrain,
        },
        {
          title: 'Nutrition',
          url: '/health/nutrition',
          icon: IconHeartRateMonitor,
        },
        {
          title: 'Sleep & Recovery',
          url: '/health/recovery',
          icon: IconHeartRateMonitor,
        },
      ],
    },
    {
      title: 'Academics',
      items: [
        {
          title: 'Grades',
          url: '/academics/grades',
          icon: IconSchool,
        },
        {
          title: 'Assignments',
          url: '/academics/assignments',
          icon: IconChecklist,
        },
        {
          title: 'Study Time',
          url: '/academics/study',
          icon: IconCalendarTime,
        },
        {
          title: 'Resources',
          url: '/academics/resources',
          icon: IconBrain,
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          title: 'How to Get Recruited',
          url: '/resources/recruitment',
          icon: IconUserSearch,
        },
        {
          title: 'Camps',
          url: '/resources/camps',
          icon: IconUsers,
        },
        {
          title: 'Scholarships',
          url: '/resources/scholarships',
          icon: IconCreditCard,
        },
        {
          title: 'Eligibility',
          url: '/resources/eligibility',
          icon: IconChecklist,
        },
        {
          title: 'Blog',
          url: '/resources/blog',
          icon: IconFileInvoice,
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          title: 'Profile',
          url: '/settings/profile',
          icon: IconUserCog,
        },
        {
          title: 'Preferences',
          url: '/settings/preferences',
          icon: IconSettings,
        },
        {
          title: 'Privacy',
          url: '/settings/privacy',
          icon: IconBrowserCheck,
        },
      ],
    },
  ],
}

export const scoutSidebarData: SidebarData = {
  user: {
    name: 'John Scout',
    email: 'j.scout@brickertape.com',
    avatar: '/avatars/scout.jpg',
  },
  teams: [],
  navGroups: [
    {
      title: 'Dashboard',
      items: [
        {
          title: 'Overview',
          url: '/scout/dashboard/overview',
          icon: IconDashboard,
        },
        {
          title: 'Statistics',
          url: '/scout/dashboard/stats',
          icon: IconChartLine,
        },
        {
          title: 'Territory',
          url: '/scout/dashboard/territory',
          icon: IconRuler,
        },
        {
          title: 'Calendar',
          url: '/scout/dashboard/calendar',
          icon: IconCalendarTime,
        },
      ],
    },
    {
      title: 'Search',
      items: [
        {
          title: 'Athlete Search',
          url: '/scout/search/athletes',
          icon: IconUserSearch,
        },
        {
          title: 'Saved Searches',
          url: '/scout/search/saved',
          icon: IconBrowserCheck,
        },
        {
          title: 'Recent Searches',
          url: '/scout/search/recent',
          icon: IconCalendarTime,
        },
        {
          title: 'Advanced Filters',
          url: '/scout/search/filters',
          icon: IconSettings,
        },
      ],
    },
    {
      title: 'Pipeline',
      items: [
        {
          title: 'Prospects',
          url: '/scout/pipeline/prospects',
          icon: IconUsers,
        },
        {
          title: 'Evaluation',
          url: '/scout/pipeline/evaluation',
          icon: IconBrain,
        },
        {
          title: 'Interested',
          url: '/scout/pipeline/interested',
          icon: IconTrophy,
        },
        {
          title: 'Offered',
          url: '/scout/pipeline/offered',
          icon: IconFileInvoice,
        },
        {
          title: 'Committed',
          url: '/scout/pipeline/committed',
          icon: IconChecklist,
        },
      ],
    },
    {
      title: 'Evaluation',
      items: [
        {
          title: 'Forms',
          url: '/scout/evaluation/forms',
          icon: IconFileInvoice,
        },
        {
          title: 'Comparisons',
          url: '/scout/evaluation/compare',
          icon: IconUsers,
        },
        {
          title: 'Ranking',
          url: '/scout/evaluation/ranking',
          icon: IconTrophy,
        },
        {
          title: 'Video Analysis',
          url: '/scout/evaluation/video',
          icon: IconBrowserCheck,
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
          title: 'Templates',
          url: '/scout/communication/templates',
          icon: IconFileInvoice,
        },
        {
          title: 'Scheduled',
          url: '/scout/communication/scheduled',
          icon: IconCalendarTime,
        },
        {
          title: 'History',
          url: '/scout/communication/history',
          icon: IconDashboard,
        },
      ],
    },
    {
      title: 'Visits',
      items: [
        {
          title: 'Calendar',
          url: '/scout/visits/calendar',
          icon: IconCalendarTime,
        },
        {
          title: 'Itineraries',
          url: '/scout/visits/itineraries',
          icon: IconChecklist,
        },
        {
          title: 'Feedback',
          url: '/scout/visits/feedback',
          icon: IconBrain,
        },
        {
          title: 'Virtual Tours',
          url: '/scout/visits/virtual',
          icon: IconBrowserCheck,
        },
      ],
    },
    {
      title: 'Class Management',
      items: [
        {
          title: 'Current Class',
          url: '/scout/class/current',
          icon: IconUsers,
        },
        {
          title: 'Scholarship Budget',
          url: '/scout/class/budget',
          icon: IconCreditCard,
        },
        {
          title: 'Needs Analysis',
          url: '/scout/class/needs',
          icon: IconBrain,
        },
        {
          title: 'Future Classes',
          url: '/scout/class/future',
          icon: IconCalendarTime,
        },
      ],
    },
    {
      title: 'Territory',
      items: [
        {
          title: 'Map View',
          url: '/scout/territory/map',
          icon: IconRuler,
        },
        {
          title: 'Schools',
          url: '/scout/territory/schools',
          icon: IconSchool,
        },
        {
          title: 'Events',
          url: '/scout/territory/events',
          icon: IconCalendarTime,
        },
        {
          title: 'Travel Planning',
          url: '/scout/territory/travel',
          icon: IconBarrierBlock,
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          title: 'Recruiting Guidelines',
          url: '/scout/resources/guidelines',
          icon: IconFileInvoice,
        },
        {
          title: 'Camps',
          url: '/scout/resources/camps',
          icon: IconUsers,
        },
        {
          title: 'Eligibility',
          url: '/scout/resources/eligibility',
          icon: IconChecklist,
        },
        {
          title: 'Blog',
          url: '/scout/resources/blog',
          icon: IconFileInvoice,
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          title: 'Profile',
          url: '/settings/profile',
          icon: IconUserCog,
        },
        {
          title: 'Preferences',
          url: '/settings/preferences',
          icon: IconSettings,
        },
        {
          title: 'Filters',
          url: '/settings/filters',
          icon: IconBrowserCheck,
        },
      ],
    },
  ],
}

export const coachSidebarData: SidebarData = {
  user: {
    name: 'Mike Coach',
    email: 'm.coach@brickertape.com',
    avatar: '/avatars/coach.jpg',
  },
  teams: [],
  navGroups: [
    {
      title: 'Dashboard',
      items: [
        {
          title: 'Team Overview',
          url: '/coach/dashboard/overview',
          icon: IconDashboard,
        },
        {
          title: 'Notifications',
          url: '/coach/dashboard/notifications',
          icon: IconBellRinging,
        },
        {
          title: 'Calendar',
          url: '/coach/dashboard/calendar',
          icon: IconCalendarTime,
        },
        {
          title: 'Attendance',
          url: '/coach/dashboard/attendance',
          icon: IconChecklist,
        },
      ],
    },
    {
      title: 'Team',
      items: [
        {
          title: 'Roster',
          url: '/coach/team/roster',
          icon: IconUsers,
        },
        {
          title: 'Depth Chart',
          url: '/coach/team/depth-chart',
          icon: IconBarrierBlock,
        },
        {
          title: 'Groups',
          url: '/coach/team/groups',
          icon: IconUsers,
        },
        {
          title: 'Eligibility',
          url: '/coach/team/eligibility',
          icon: IconChecklist,
        },
      ],
    },
    {
      title: 'Performance',
      items: [
        {
          title: 'Team Stats',
          url: '/coach/performance/team',
          icon: IconChartLine,
        },
        {
          title: 'Individual Stats',
          url: '/coach/performance/individual',
          icon: IconRuler,
        },
        {
          title: 'Comparisons',
          url: '/coach/performance/compare',
          icon: IconBrain,
        },
        {
          title: 'Video Analysis',
          url: '/coach/performance/video',
          icon: IconBrowserCheck,
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
          title: 'Drill Library',
          url: '/coach/training/drills',
          icon: IconBarrierBlock,
        },
        {
          title: 'Assignment',
          url: '/coach/training/assign',
          icon: IconFileInvoice,
        },
        {
          title: 'Monitoring',
          url: '/coach/training/monitor',
          icon: IconHeartRateMonitor,
        },
      ],
    },
    {
      title: 'Game Planning',
      items: [
        {
          title: 'Opponent Scouting',
          url: '/coach/game/scouting',
          icon: IconUserSearch,
        },
        {
          title: 'Strategy',
          url: '/coach/game/strategy',
          icon: IconBrain,
        },
        {
          title: 'Play Designer',
          url: '/coach/game/plays',
          icon: IconBarrierBlock,
        },
        {
          title: 'Situational',
          url: '/coach/game/situations',
          icon: IconTrophy,
        },
      ],
    },
    {
      title: 'Communication',
      items: [
        {
          title: 'Team Messages',
          url: '/coach/communication/team',
          icon: IconUsers,
        },
        {
          title: 'Individual Messages',
          url: '/coach/communication/individual',
          icon: IconUserSearch,
        },
        {
          title: 'Parent Messages',
          url: '/coach/communication/parents',
          icon: IconUsers,
        },
        {
          title: 'Staff Messages',
          url: '/coach/communication/staff',
          icon: IconUsers,
        },
      ],
    },
    {
      title: 'Development',
      items: [
        {
          title: 'Skill Assessment',
          url: '/coach/development/skills',
          icon: IconBrain,
        },
        {
          title: 'Goal Setting',
          url: '/coach/development/goals',
          icon: IconTrophy,
        },
        {
          title: 'Progress Tracking',
          url: '/coach/development/progress',
          icon: IconChartLine,
        },
        {
          title: 'Feedback',
          url: '/coach/development/feedback',
          icon: IconFileInvoice,
        },
      ],
    },
    {
      title: 'Recruitment',
      items: [
        {
          title: 'College Interest',
          url: '/coach/recruitment/interest',
          icon: IconSchool,
        },
        {
          title: 'Player Profiles',
          url: '/coach/recruitment/profiles',
          icon: IconUserCog,
        },
        {
          title: 'College Connections',
          url: '/coach/recruitment/connections',
          icon: IconUsers,
        },
        {
          title: 'Events',
          url: '/coach/recruitment/events',
          icon: IconCalendarTime,
        },
      ],
    },
    {
      title: 'Health',
      items: [
        {
          title: 'Injury Reports',
          url: '/coach/health/injuries',
          icon: IconHeartRateMonitor,
        },
        {
          title: 'Return to Play',
          url: '/coach/health/return',
          icon: IconTrophy,
        },
        {
          title: 'Medical Clearance',
          url: '/coach/health/clearance',
          icon: IconChecklist,
        },
        {
          title: 'Wellness',
          url: '/coach/health/wellness',
          icon: IconHeartRateMonitor,
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          title: 'Recruiting Guidelines',
          url: '/coach/resources/recruiting',
          icon: IconFileInvoice,
        },
        {
          title: 'Camps',
          url: '/coach/resources/camps',
          icon: IconUsers,
        },
        {
          title: 'Eligibility',
          url: '/coach/resources/eligibility',
          icon: IconChecklist,
        },
        {
          title: 'Blog',
          url: '/coach/resources/blog',
          icon: IconFileInvoice,
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          title: 'Profile',
          url: '/settings/profile',
          icon: IconUserCog,
        },
        {
          title: 'Preferences',
          url: '/settings/preferences',
          icon: IconSettings,
        },
        {
          title: 'Team Settings',
          url: '/settings/team',
          icon: IconUsers,
        },
      ],
    },
  ],
}

export const counselorSidebarData: SidebarData = {
  user: {
    name: 'Sarah Counselor',
    email: 's.counselor@brickertape.com',
    avatar: '/avatars/counselor.jpg',
  },
  teams: [],
  navGroups: [
    {
      title: 'Student Support',
      items: [
        {
          title: 'Student Guidance',
          url: '/support/guidance',
          icon: IconBrain,
        },
        {
          title: 'Academic Tracking',
          url: '/support/academic',
          icon: IconChartLine,
        },
        {
          title: 'College Prep',
          url: '/support/college',
          icon: IconSchool,
        },
        {
          title: 'Career Planning',
          url: '/support/career',
          icon: IconBrowserCheck,
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          title: 'Profile',
          url: '/settings/profile',
          icon: IconUserCog,
        },
        {
          title: 'Preferences',
          url: '/settings/preferences',
          icon: IconSettings,
        },
      ],
    },
  ],
}

export const trainerSidebarData: SidebarData = {
  user: {
    name: 'Tom Trainer',
    email: 't.trainer@brickertape.com',
    avatar: '/avatars/trainer.jpg',
  },
  teams: [],
  navGroups: [
    {
      title: 'Training',
      items: [
        {
          title: 'Program Design',
          url: '/training/programs',
          icon: IconChecklist,
        },
        {
          title: 'Client Progress',
          url: '/training/progress',
          icon: IconChartLine,
        },
        {
          title: 'Workout Library',
          url: '/training/workouts',
          icon: IconBarrierBlock,
        },
        {
          title: 'Nutrition Planning',
          url: '/training/nutrition',
          icon: IconHeartRateMonitor,
        },
      ],
    },
    {
      title: 'Settings',
      items: [
        {
          title: 'Profile',
          url: '/settings/profile',
          icon: IconUserCog,
        },
        {
          title: 'Preferences',
          url: '/settings/preferences',
          icon: IconSettings,
        },
      ],
    },
  ],
}
