import { DashboardType } from '@/components/layout/types/dashboard'
import { DashboardFeatures, getRoleFeatures } from '@/features/dashboard/types/dashboard-features'

export function useDashboardFeatures(role: DashboardType) {
  const features = getRoleFeatures(role)

  const hasFeature = (featureName: string): boolean => {
    const roleFeatures = features[role as keyof DashboardFeatures]
    if (!roleFeatures) return false

    const feature = Object.values(roleFeatures).find(
      (f) => 'name' in f && f.name === featureName
    )

    // Type guard to check if feature is a BaseFeature with enabled and requiresPermission properties
    return feature && 'enabled' in feature ? 
      feature.enabled && !feature.requiresPermission : 
      false
  }

  const getMetrics = () => {
    const roleFeatures = features[role as keyof DashboardFeatures]
    return roleFeatures ? roleFeatures.metrics : []
  }

  return {
    features,
    hasFeature,
    getMetrics,
  }
}