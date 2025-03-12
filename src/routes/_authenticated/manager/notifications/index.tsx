import { createFileRoute } from '@tanstack/react-router'

export function Component() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
      <p className="text-muted-foreground">
        Platform notifications and alerts for managers (coming soon)
      </p>
    </div>
  )
}

export const Route = createFileRoute('/_authenticated/manager/notifications/')({ component: Component })