export type DashboardType = 'parent' | 'complete' | 'child' | 'basic' | 'template' | 'developer' | 'athlete' | 'scout' | 'coach' | 'counselor' | 'trainer'

export interface DashboardConfig {
  type: DashboardType
  showTeamSwitcher: boolean
}

export const isDashboardWithTeamSwitcher = (type: DashboardType): boolean => {
  return type === 'parent' || type === 'complete'
}