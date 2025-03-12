import { Link, useNavigate } from '@tanstack/react-router';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ActivityLogsList } from './activity-logs-list';
import { SupportTicketsList } from './support-tickets-list';
import { UserImpersonationForm } from './user-impersonation-form';
import { DeveloperStats } from './developer-stats';

export function DeveloperDashboard() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Developer Dashboard</h2>
        <p className="text-muted-foreground">
          Platform management, user support, and debugging tools for developers.
        </p>
      </div>

      <Tabs defaultValue="overview" onValueChange={(value) => {
        switch(value) {
          case 'overview':
            navigate({ to: '/developer/overview' });
            break;
          case 'activity':
            navigate({ to: '/developer/activity' });
            break;
          case 'tickets':
            navigate({ to: '/developer/tickets' });
            break;
          case 'impersonation':
            navigate({ to: '/developer/impersonation' });
            break;
        }
      }}>
        <TabsList className="grid grid-cols-4 w-full max-w-3xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity Logs</TabsTrigger>
          <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
          <TabsTrigger value="impersonation">User Impersonation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <DeveloperStats />
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest user actions across the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ActivityLogsList limit={5} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Open Tickets</CardTitle>
                <CardDescription>
                  Support tickets requiring attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SupportTicketsList status="OPEN" limit={5} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Impersonations</CardTitle>
                <CardDescription>
                  Latest user impersonation sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Recent impersonation logs would go here */}
                <p className="text-sm text-muted-foreground">
                  No recent impersonation sessions
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
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
        </TabsContent>

        <TabsContent value="tickets" className="space-y-4">
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
        </TabsContent>

        <TabsContent value="impersonation" className="space-y-4">
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
        </TabsContent>
      </Tabs>
    </div>
  );
}