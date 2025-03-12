import { createFileRoute } from '@tanstack/react-router'

export function Component() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Roles & Permissions</h2>
      <p className="text-muted-foreground">
        Manage user roles and access permissions across the platform (coming soon)
      </p>
    </div>
  )
}

export const Route = createFileRoute('/_authenticated/owner/roles/')({ component: Component })