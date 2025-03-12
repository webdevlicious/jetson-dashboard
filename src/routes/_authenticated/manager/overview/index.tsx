import { createFileRoute } from '@tanstack/react-router'
import { ManagerDashboard } from '@/features/dashboard/manager-dashboard'

export function Component() {
  return <ManagerDashboard />
}

export const Route = createFileRoute('/_authenticated/manager/overview/')({ component: Component })