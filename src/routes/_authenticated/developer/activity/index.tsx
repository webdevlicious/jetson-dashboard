import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ActivityLogsList } from '@/features/developer/components/activity-logs-list'

export function Component() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Activity Logs</h2>
        <p className="text-muted-foreground">
          Monitor and analyze user actions across the platform
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Activity Logs</CardTitle>
          <CardDescription>
            Monitor and analyze user actions across the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ActivityLogsList />
        </CardContent>
      </Card>
    </div>
  )
}

export const Route = createFileRoute('/_authenticated/developer/activity/')({ component: Component })