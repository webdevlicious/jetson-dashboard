import { createFileRoute } from '@tanstack/react-router'

export function Component() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
      <p className="text-muted-foreground">
        Comprehensive user management and administration (coming soon)
      </p>
    </div>
  )
}

export const Route = createFileRoute('/_authenticated/owner/users/')({ component: Component })