import { PrismaClient } from '@prisma/client';
import { DashboardFeatures } from '../src/features/dashboard/types/dashboard-features';

const prisma = new PrismaClient();

const defaultMetrics = {
  performance: {
    title: 'Performance Score',
    value: '85',
    change: '+5%',
    changeType: 'increase' as const,
    timeframe: 'Last 30 days'
  },
  engagement: {
    title: 'Engagement Rate',
    value: '92%',
    change: '+3%',
    changeType: 'increase' as const,
    timeframe: 'Last 30 days'
  },
  progress: {
    title: 'Goal Progress',
    value: '75%',
    change: '+10%',
    changeType: 'increase' as const,
    timeframe: 'This quarter'
  }
};

const dashboardFeatures: DashboardFeatures = {
  athlete: {
    performanceTracking: {
      name: 'Performance Tracking',
      enabled: true,
      requiresPermission: false,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    recruitmentProgress: {
      name: 'Recruitment Progress',
      enabled: true,
      requiresPermission: false,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    teamActivities: {
      name: 'Team Activities',
      enabled: true,
      requiresPermission: false,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    trainingSchedule: {
      name: 'Training Schedule',
      enabled: true,
      requiresPermission: false,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    metrics: [
      defaultMetrics.performance,
      defaultMetrics.progress,
      {
        title: 'Training Sessions',
        value: '24',
        change: '+2',
        changeType: 'increase' as const,
        timeframe: 'This month'
      }
    ]
  },
  scout: {
    talentEvaluation: {
      name: 'Talent Evaluation',
      enabled: true,
      requiresPermission: false,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    recruitmentReports: {
      name: 'Recruitment Reports',
      enabled: true,
      requiresPermission: true,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    eventScheduling: {
      name: 'Event Scheduling',
      enabled: true,
      requiresPermission: false,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    athleteDatabase: {
      name: 'Athlete Database',
      enabled: true,
      requiresPermission: true,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    metrics: [
      {
        title: 'Athletes Scouted',
        value: '156',
        change: '+12',
        changeType: 'increase' as const,
        timeframe: 'This month'
      },
      {
        title: 'Recruitment Rate',
        value: '68%',
        change: '+5%',
        changeType: 'increase' as const,
        timeframe: 'Last quarter'
      }
    ]
  },
  coach: {
    teamManagement: {
      name: 'Team Management',
      enabled: true,
      requiresPermission: true,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    playerDevelopment: {
      name: 'Player Development',
      enabled: true,
      requiresPermission: true,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    gameStrategy: {
      name: 'Game Strategy',
      enabled: true,
      requiresPermission: false,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    performanceAnalytics: {
      name: 'Performance Analytics',
      enabled: true,
      requiresPermission: true,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    metrics: [
      defaultMetrics.performance,
      {
        title: 'Team Win Rate',
        value: '75%',
        change: '+15%',
        changeType: 'increase' as const,
        timeframe: 'This season'
      }
    ]
  },
  counselor: {
    studentGuidance: {
      name: 'Student Guidance',
      enabled: true,
      requiresPermission: true,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    academicTracking: {
      name: 'Academic Tracking',
      enabled: true,
      requiresPermission: true,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    collegePrep: {
      name: 'College Prep',
      enabled: true,
      requiresPermission: false,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    careerPlanning: {
      name: 'Career Planning',
      enabled: true,
      requiresPermission: false,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    metrics: [
      {
        title: 'Student Success Rate',
        value: '88%',
        change: '+8%',
        changeType: 'increase',
        timeframe: 'This semester'
      },
      defaultMetrics.engagement
    ]
  },
  trainer: {
    programDesign: {
      name: 'Program Design',
      enabled: true,
      requiresPermission: true,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    clientProgress: {
      name: 'Client Progress',
      enabled: true,
      requiresPermission: true,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    workoutLibrary: {
      name: 'Workout Library',
      enabled: true,
      requiresPermission: false,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    nutritionPlanning: {
      name: 'Nutrition Planning',
      enabled: true,
      requiresPermission: true,
      usageCount: 0,
      lastAccessed: null,
      analyticsEnabled: true
    },
    metrics: [
      defaultMetrics.progress,
      {
        title: 'Active Clients',
        value: '45',
        change: '+8',
        changeType: 'increase',
        timeframe: 'This month'
      }
    ]
  }
};

export { dashboardFeatures };