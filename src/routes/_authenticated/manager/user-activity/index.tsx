import { createFileRoute } from '@tanstack/react-router'

export function Component() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">User Activity</h2>
      <p className="text-muted-foreground">
        Monitor and analyze user activity on the platform (coming soon)
      </p>
    </div>
  )
}

export const Route = createFileRoute('/_authenticated/manager/user-activity/')({ component: Component })