import { createFileRoute } from '@tanstack/react-router'

export function Component() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">System Alerts</h2>
      <p className="text-muted-foreground">
        Critical system alerts and notifications requiring attention (coming soon)
      </p>
    </div>
  )
}

export const Route = createFileRoute('/_authenticated/manager/alerts/')({ component: Component })