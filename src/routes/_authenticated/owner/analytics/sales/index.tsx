import { createFileRoute } from '@tanstack/react-router'

export function Component() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Sales Performance</h2>
      <p className="text-muted-foreground">
        Analyze sales metrics and performance trends (coming soon)
      </p>
    </div>
  )
}

export const Route = createFileRoute('/_authenticated/owner/analytics/sales/')({ component: Component })