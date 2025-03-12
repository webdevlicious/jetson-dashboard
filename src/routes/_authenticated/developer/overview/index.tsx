import { createFileRoute } from '@tanstack/react-router'
import { DeveloperDashboard } from '@/features/developer/components/developer-dashboard'

export function Component() {
  return <DeveloperDashboard />
}

export const Route = createFileRoute('/_authenticated/developer/overview/')({ component: Component })