import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SupportTicketsList } from '@/features/developer/components/support-tickets-list'

export function Component() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Support Tickets</h2>
        <p className="text-muted-foreground">
          Manage and resolve user support requests
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Support Tickets</CardTitle>
          <CardDescription>
            Manage and resolve user support requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SupportTicketsList />
        </CardContent>
      </Card>
    </div>
  )
}

export const Route = createFileRoute('/_authenticated/developer/tickets/')({ component: Component })