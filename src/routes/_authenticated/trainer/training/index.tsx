import { createFileRoute } from '@tanstack/react-router'

export function Component() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Training Management</h2>
      <p className="text-muted-foreground">
        Athletic training program development and monitoring (coming soon)
      </p>
    </div>
  )
}

export const Route = createFileRoute('/_authenticated/trainer/training/')({ component: Component })