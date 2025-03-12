import { createFileRoute } from '@tanstack/react-router'

export function Component() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">User Retention</h2>
      <p className="text-muted-foreground">
        Analyze user retention metrics and trends (coming soon)
      </p>
    </div>
  )
}

export const Route = createFileRoute('/_authenticated/owner/analytics/retention/')({ component: Component })