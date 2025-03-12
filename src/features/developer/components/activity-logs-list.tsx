import { useState } from 'react';
import { format } from 'date-fns';
import { IconSearch, IconFilter } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';

// Mock data for activity logs
const mockActivityLogs = [
  {
    id: '1',
    userId: 'user123',
    userName: 'John Doe',
    action: 'login',
    resourceType: 'user',
    resourceId: 'user123',
    details: { browser: 'Chrome', os: 'Windows' },
    ipAddress: '192.168.1.1',
    userAgent: 'Mozilla/5.0',
    createdAt: new Date('2023-05-15T10:30:00'),
  },
  {
    id: '2',
    userId: 'user456',
    userName: 'Jane Smith',
    action: 'update_profile',
    resourceType: 'profile',
    resourceId: 'profile456',
    details: { fields: ['name', 'email'] },
    ipAddress: '192.168.1.2',
    userAgent: 'Mozilla/5.0',
    createdAt: new Date('2023-05-15T11:45:00'),
  },
  {
    id: '3',
    userId: 'user789',
    userName: 'Mike Johnson',
    action: 'create_team',
    resourceType: 'team',
    resourceId: 'team123',
    details: { teamName: 'Eagles', sport: 'Basketball' },
    ipAddress: '192.168.1.3',
    userAgent: 'Mozilla/5.0',
    createdAt: new Date('2023-05-16T09:15:00'),
  },
  {
    id: '4',
    userId: 'user123',
    userName: 'John Doe',
    action: 'send_message',
    resourceType: 'message',
    resourceId: 'msg456',
    details: { recipient: 'user789' },
    ipAddress: '192.168.1.1',
    userAgent: 'Mozilla/5.0',
    createdAt: new Date('2023-05-16T14:20:00'),
  },
  {
    id: '5',
    userId: 'user456',
    userName: 'Jane Smith',
    action: 'logout',
    resourceType: 'user',
    resourceId: 'user456',
    details: {},
    ipAddress: '192.168.1.2',
    userAgent: 'Mozilla/5.0',
    createdAt: new Date('2023-05-16T17:30:00'),
  },
];

interface ActivityLogsListProps {
  limit?: number;
  userId?: string;
  action?: string;
}

export function ActivityLogsList({ limit, userId, action }: ActivityLogsListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAction, setSelectedAction] = useState<string | undefined>(action);
  const [selectedUser, setSelectedUser] = useState<string | undefined>(userId);
  
  // Filter logs based on props and search/filter state
  const filteredLogs = mockActivityLogs
    .filter(log => {
      if (selectedUser && log.userId !== selectedUser) return false;
      if (selectedAction && log.action !== selectedAction) return false;
      if (searchTerm && !(
        log.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.resourceType.toLowerCase().includes(searchTerm.toLowerCase())
      )) return false;
      return true;
    })
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, limit || mockActivityLogs.length);

  // Get unique actions for filter dropdown
  const uniqueActions = Array.from(new Set(mockActivityLogs.map(log => log.action)));
  
  // Get unique users for filter dropdown
  const uniqueUsers = Array.from(
    new Set(mockActivityLogs.map(log => ({ id: log.userId, name: log.userName })))
  ).reduce((acc: { id: string; name: string }[], current) => {
    if (!acc.find(item => item.id === current.id)) {
      acc.push(current);
    }
    return acc;
  }, []);

  function getActionBadgeColor(action: string) {
    switch (action) {
      case 'login':
      case 'logout':
        return 'bg-blue-100 text-blue-800';
      case 'create_team':
      case 'update_team':
        return 'bg-green-100 text-green-800';
      case 'update_profile':
        return 'bg-purple-100 text-purple-800';
      case 'send_message':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 justify-between sm:flex-row">
        <div className="relative w-full sm:w-64">
          <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search logs..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <Select value={selectedAction} onValueChange={setSelectedAction}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by action" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All actions</SelectItem>
              {uniqueActions.map(action => (
                <SelectItem key={action} value={action}>
                  {action.replace('_', ' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedUser} onValueChange={setSelectedUser}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by user" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All users</SelectItem>
              {uniqueUsers.map(user => (
                <SelectItem key={user.id} value={user.id}>
                  {user.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <IconFilter className="w-4 h-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h4 className="font-medium">Date Range</h4>
                <Calendar
                  mode="range"
                />
                <div className="flex justify-end">
                  <Button size="sm">Apply</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Resource</TableHead>
              <TableHead>IP Address</TableHead>
              <TableHead>Date & Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.userName}</TableCell>
                  <TableCell>
                    <Badge className={getActionBadgeColor(log.action)} variant="outline">
                      {log.action.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>{log.resourceType}</TableCell>
                  <TableCell>{log.ipAddress}</TableCell>
                  <TableCell>{format(log.createdAt, 'MMM d, yyyy HH:mm')}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No activity logs found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {!limit && filteredLogs.length > 0 && (
        <div className="flex justify-center">
          <Button variant="outline">Load More</Button>
        </div>
      )}
    </div>
  );
}
