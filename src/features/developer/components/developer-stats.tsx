import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IconTicket, IconUsers, IconActivity, IconBug } from '@tabler/icons-react';

export function DeveloperStats() {
  // Mock statistics data
  const stats = [
    {
      title: 'Open Tickets',
      value: '12',
      description: '3 critical',
      icon: <IconTicket className="h-4 w-4 text-muted-foreground" />,
      change: '+2 from yesterday',
      trend: 'up',
    },
    {
      title: 'Active Users',
      value: '342',
      description: '24 new today',
      icon: <IconUsers className="h-4 w-4 text-muted-foreground" />,
      change: '+5% from last week',
      trend: 'up',
    },
    {
      title: 'System Errors',
      value: '5',
      description: '2 resolved today',
      icon: <IconBug className="h-4 w-4 text-muted-foreground" />,
      change: '-3 from yesterday',
      trend: 'down',
    },
    {
      title: 'User Actions',
      value: '1,204',
      description: 'Last 24 hours',
      icon: <IconActivity className="h-4 w-4 text-muted-foreground" />,
      change: '+12% from average',
      trend: 'up',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
            <div className={`text-xs mt-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}