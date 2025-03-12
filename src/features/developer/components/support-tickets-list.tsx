import { useState } from 'react';
import { format } from 'date-fns';
import { IconSearch, IconFilter, IconEdit, IconTrash, IconMessageCircle } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

// Mock data for support tickets
const mockTickets = [
  {
    id: 'ticket-1',
    title: 'Cannot access athlete profile',
    description: 'I am unable to view my athlete profile after the recent update.',
    status: 'OPEN',
    priority: 'HIGH',
    category: 'bug',
    creatorId: 'user123',
    creatorName: 'John Doe',
    assigneeId: null,
    assigneeName: null,
    createdAt: new Date('2023-05-14T09:30:00'),
    updatedAt: new Date('2023-05-14T09:30:00'),
  },
  {
    id: 'ticket-2',
    title: 'Feature request: Export stats to CSV',
    description: 'It would be helpful to export athletic stats to CSV format for further analysis.',
    status: 'IN_PROGRESS',
    priority: 'MEDIUM',
    category: 'feature_request',
    creatorId: 'user456',
    creatorName: 'Jane Smith',
    assigneeId: 'dev789',
    assigneeName: 'Alex Developer',
    createdAt: new Date('2023-05-13T14:20:00'),
    updatedAt: new Date('2023-05-15T11:15:00'),
  },
  {
    id: 'ticket-3',
    title: 'Login issues on mobile devices',
    description: 'Users are reporting difficulties logging in from mobile devices, especially on iOS.',
    status: 'OPEN',
    priority: 'CRITICAL',
    category: 'bug',
    creatorId: 'user789',
    creatorName: 'Mike Johnson',
    assigneeId: null,
    assigneeName: null,
    createdAt: new Date('2023-05-15T08:45:00'),
    updatedAt: new Date('2023-05-15T08:45:00'),
  },
  {
    id: 'ticket-4',
    title: 'Password reset email not received',
    description: 'I requested a password reset but did not receive the email.',
    status: 'WAITING_ON_CLIENT',
    priority: 'MEDIUM',
    category: 'account_issue',
    creatorId: 'user321',
    creatorName: 'Sarah Williams',
    assigneeId: 'dev456',
    assigneeName: 'Taylor Developer',
    createdAt: new Date('2023-05-12T16:30:00'),
    updatedAt: new Date('2023-05-14T10:20:00'),
  },
  {
    id: 'ticket-5',
    title: 'Team creation error',
    description: 'Getting an error when trying to create a new team: "Database connection failed"',
    status: 'RESOLVED',
    priority: 'HIGH',
    category: 'bug',
    creatorId: 'user654',
    creatorName: 'Robert Brown',
    assigneeId: 'dev123',
    assigneeName: 'Jordan Developer',
    createdAt: new Date('2023-05-11T13:15:00'),
    updatedAt: new Date('2023-05-13T15:45:00'),
    resolvedAt: new Date('2023-05-13T15:45:00'),
  },
];

// Mock data for ticket updates
const mockTicketUpdates = [
  {
    id: 'update-1',
    ticketId: 'ticket-2',
    userId: 'dev789',
    userName: 'Alex Developer',
    message: 'I am looking into this feature request. Will provide an estimate soon.',
    createdAt: new Date('2023-05-15T11:15:00'),
  },
  {
    id: 'update-2',
    ticketId: 'ticket-4',
    userId: 'dev456',
    userName: 'Taylor Developer',
    message: 'I checked our email logs and the reset email was sent but bounced. Please verify your email address.',
    createdAt: new Date('2023-05-14T10:20:00'),
  },
  {
    id: 'update-3',
    ticketId: 'ticket-5',
    userId: 'dev123',
    userName: 'Jordan Developer',
    message: 'Fixed the database connection issue. The team creation should work now.',
    createdAt: new Date('2023-05-13T15:45:00'),
  },
];

interface SupportTicketsListProps {
  limit?: number;
  status?: string;
}

export function SupportTicketsList({ limit, status }: SupportTicketsListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(status);
  const [selectedPriority, setSelectedPriority] = useState<string | undefined>();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [selectedTicket, setSelectedTicket] = useState<typeof mockTickets[0] | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isReplyDialogOpen, setIsReplyDialogOpen] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  
  // Filter tickets based on props and search/filter state
  const filteredTickets = mockTickets
    .filter(ticket => {
      if (selectedStatus && ticket.status !== selectedStatus) return false;
      if (selectedPriority && ticket.priority !== selectedPriority) return false;
      if (selectedCategory && ticket.category !== selectedCategory) return false;
      if (searchTerm && !(
        ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.creatorName.toLowerCase().includes(searchTerm.toLowerCase())
      )) return false;
      return true;
    })
    .sort((a, b) => {
      // Sort by priority first, then by creation date
      const priorityOrder = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
      const aPriority = priorityOrder[a.priority as keyof typeof priorityOrder] || 999;
      const bPriority = priorityOrder[b.priority as keyof typeof priorityOrder] || 999;
      
      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }
      
      return b.createdAt.getTime() - a.createdAt.getTime();
    })
    .slice(0, limit || mockTickets.length);

  // Get unique statuses for filter dropdown
  const uniqueStatuses = Array.from(new Set(mockTickets.map(ticket => ticket.status)));
  
  // Get unique priorities for filter dropdown
  const uniquePriorities = Array.from(new Set(mockTickets.map(ticket => ticket.priority)));
  
  // Get unique categories for filter dropdown
  const uniqueCategories = Array.from(new Set(mockTickets.map(ticket => ticket.category)));

  // Get ticket updates for selected ticket
  const ticketUpdates = selectedTicket 
    ? mockTicketUpdates.filter(update => update.ticketId === selectedTicket.id)
    : [];

  function getStatusBadgeColor(status: string) {
    switch (status) {
      case 'OPEN':
        return 'bg-blue-100 text-blue-800';
      case 'IN_PROGRESS':
        return 'bg-yellow-100 text-yellow-800';
      case 'WAITING_ON_CLIENT':
        return 'bg-purple-100 text-purple-800';
      case 'RESOLVED':
        return 'bg-green-100 text-green-800';
      case 'CLOSED':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  function getPriorityBadgeColor(priority: string) {
    switch (priority) {
      case 'CRITICAL':
        return 'bg-red-100 text-red-800';
      case 'HIGH':
        return 'bg-orange-100 text-orange-800';
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-800';
      case 'LOW':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  function getCategoryBadgeColor(category: string) {
    switch (category) {
      case 'bug':
        return 'bg-red-100 text-red-800';
      case 'feature_request':
        return 'bg-blue-100 text-blue-800';
      case 'account_issue':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  function handleViewTicket(ticket: typeof mockTickets[0]) {
    setSelectedTicket(ticket);
    setIsViewDialogOpen(true);
  }

  function handleReplyToTicket() {
    setIsReplyDialogOpen(true);
  }

  function submitReply() {
    if (!replyMessage.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a reply message',
        variant: 'destructive',
      });
      return;
    }

    // Simulate API call to add reply
    toast({
      title: 'Reply Submitted',
      description: 'Your reply has been added to the ticket',
    });

    setReplyMessage('');
    setIsReplyDialogOpen(false);
  }

  function assignToMe(ticket: typeof mockTickets[0]) {
    // Simulate API call to assign ticket
    toast({
      title: 'Ticket Assigned',
      description: `Ticket #${ticket.id} has been assigned to you`,
    });
  }

  function updateTicketStatus(ticket: typeof mockTickets[0], newStatus: string) {
    // Simulate API call to update status
    toast({
      title: 'Status Updated',
      description: `Ticket status changed to ${newStatus}`,
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2 justify-between">
        <div className="relative w-full sm:w-64">
          <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tickets..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All statuses</SelectItem>
              {uniqueStatuses.map(status => (
                <SelectItem key={status} value={status}>
                  {status.replace('_', ' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedPriority} onValueChange={setSelectedPriority}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All priorities</SelectItem>
              {uniquePriorities.map(priority => (
                <SelectItem key={priority} value={priority}>
                  {priority}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All categories</SelectItem>
              {uniqueCategories.map(category => (
                <SelectItem key={category} value={category}>
                  {category.replace('_', ' ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-mono text-xs">{ticket.id}</TableCell>
                  <TableCell className="font-medium">{ticket.title}</TableCell>
                  <TableCell>
                    <Badge className={getStatusBadgeColor(ticket.status)} variant="outline">
                      {ticket.status.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityBadgeColor(ticket.priority)} variant="outline">
                      {ticket.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getCategoryBadgeColor(ticket.category)} variant="outline">
                      {ticket.category.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>{ticket.creatorName}</TableCell>
                  <TableCell>{format(ticket.createdAt, 'MMM d, yyyy')}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleViewTicket(ticket)}>
                        <IconMessageCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <IconEdit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <IconTrash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No tickets found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* View Ticket Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedTicket?.title}</DialogTitle>
            <DialogDescription>
              Ticket ID: {selectedTicket?.id}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <h4 className="text-sm font-medium">Status</h4>
                <Badge className={selectedTicket ? getStatusBadgeColor(selectedTicket.status) : ''} variant="outline">
                  {selectedTicket?.status.replace('_', ' ')}
                </Badge>
              </div>
              <div>
                <h4 className="text-sm font-medium">Priority</h4>
                <Badge className={selectedTicket ? getPriorityBadgeColor(selectedTicket.priority) : ''} variant="outline">
                  {selectedTicket?.priority}
                </Badge>
              </div>
              <div>
                <h4 className="text-sm font-medium">Category</h4>
                <Badge className={selectedTicket ? getCategoryBadgeColor(selectedTicket.category) : ''} variant="outline">
                  {selectedTicket?.category.replace('_', ' ')}
                </Badge>
              </div>
              <div>
                <h4 className="text-sm font-medium">Created</h4>
                <p className="text-sm">{selectedTicket ? format(selectedTicket.createdAt, 'MMM d, yyyy') : ''}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium">Description</h4>
              <p className="text-sm mt-1">{selectedTicket?.description}</p>
            </div>
            
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Ticket Updates</h4>
                <Button size="sm" onClick={handleReplyToTicket}>Add Reply</Button>
              </div>
              
              {ticketUpdates.length > 0 ? (
                <div className="space-y-3 mt-2">
                  {ticketUpdates.map((update) => (
                    <div key={update.id} className="bg-muted p-3 rounded-md">
                      <div className="flex justify-between items-start">
                        <div className="font-medium text-sm">{update.userName}</div>
                        <div className="text-xs text-muted-foreground">{format(update.createdAt, 'MMM d, yyyy h:mm a')}</div>
                      </div>
                      <p className="text-sm mt-1">{update.message}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mt-2">No updates yet</p>
              )}
            </div>
          </div>
          
          <DialogFooter className="gap-2 sm:gap-0">
            {selectedTicket && !selectedTicket.assigneeName && (
              <Button variant="outline" onClick={() => assignToMe(selectedTicket)}>Assign to Me</Button>
            )}
            
            {selectedTicket && selectedTicket.status !== 'RESOLVED' && (
              <Button variant="outline" onClick={() => updateTicketStatus(selectedTicket, 'RESOLVED')}>Mark as Resolved</Button>
            )}
            
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Reply Dialog */}
      <Dialog open={isReplyDialogOpen} onOpenChange={setIsReplyDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Reply</DialogTitle>
            <DialogDescription>
              Add a reply to ticket #{selectedTicket?.id}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <Textarea 
              placeholder="Type your reply here..."
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsReplyDialogOpen(false)}>Cancel</Button>
            <Button onClick={submitReply}>Submit Reply</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}