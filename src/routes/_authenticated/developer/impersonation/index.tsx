import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { UserImpersonationForm } from '@/features/developer/components/user-impersonation-form'

export function Component() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">User Impersonation</h2>
        <p className="text-muted-foreground">
          Temporarily access user accounts to diagnose issues
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Impersonation</CardTitle>
          <CardDescription>
            Temporarily access user accounts to diagnose issues
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserImpersonationForm />
        </CardContent>
      </Card>
    </div>
  )
}

export const Route = createFileRoute('/_authenticated/developer/impersonation/')({ component: Component })