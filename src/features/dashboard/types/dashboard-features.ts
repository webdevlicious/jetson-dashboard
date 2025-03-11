import { DashboardType } from '@/components/layout/types/dashboard'

export interface BaseFeature {
  name: string
  enabled: boolean
  requiresPermission: boolean
}

export interface MetricCard {
  title: string
  value: string | number
  change?: string
  changeType?: 'increase' | 'decrease'
  timeframe?: string
}

export interface DashboardFeatures {
  athlete: {
    performanceTracking: BaseFeature
    recruitmentProgress: BaseFeature
    teamActivities: BaseFeature
    trainingSchedule: BaseFeature
    metrics: MetricCard[]
  }
  scout: {
    talentEvaluation: BaseFeature
    recruitmentReports: BaseFeature
    eventScheduling: BaseFeature
    athleteDatabase: BaseFeature
    metrics: MetricCard[]
  }
  coach: {
    teamManagement: BaseFeature
    playerDevelopment: BaseFeature
    gameStrategy: BaseFeature
    performanceAnalytics: BaseFeature
    metrics: MetricCard[]
  }
  counselor: {
    studentGuidance: BaseFeature
    academicTracking: BaseFeature
    collegePrep: BaseFeature
    careerPlanning: BaseFeature
    metrics: MetricCard[]
  }
  trainer: {
    programDesign: BaseFeature
    clientProgress: BaseFeature
    workoutLibrary: BaseFeature
    nutritionPlanning: BaseFeature
    metrics: MetricCard[]
  }
}

export const getRoleFeatures = (role: DashboardType): Partial<DashboardFeatures> => {
  switch (role) {
    case 'athlete':
      return {
        athlete: {
          performanceTracking: { name: 'Performance Tracking', enabled: true, requiresPermission: false },
          recruitmentProgress: { name: 'Recruitment Progress', enabled: true, requiresPermission: false },
          teamActivities: { name: 'Team Activities', enabled: true, requiresPermission: false },
          trainingSchedule: { name: 'Training Schedule', enabled: true, requiresPermission: false },
          metrics: []
        }
      }
    case 'scout':
      return {
        scout: {
          talentEvaluation: { name: 'Talent Evaluation', enabled: true, requiresPermission: false },
          recruitmentReports: { name: 'Recruitment Reports', enabled: true, requiresPermission: true },
          eventScheduling: { name: 'Event Scheduling', enabled: true, requiresPermission: false },
          athleteDatabase: { name: 'Athlete Database', enabled: true, requiresPermission: true },
          metrics: []
        }
      }
    // Add other role cases as needed
    default:
      return {}
  }
}