import { createFileRoute } from '@tanstack/react-router'
import { OwnerDashboard } from '@/features/dashboard/owner-dashboard'

export function Component() {
  return <OwnerDashboard />
}

export const Route = createFileRoute('/_authenticated/owner/overview/')({ component: Component })