import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconUserSearch, IconUserCheck } from '@tabler/icons-react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';

// Form schema for user impersonation
const impersonationFormSchema = z.object({
  userIdentifier: z.string().min(1, { message: 'User identifier is required' }),
  searchType: z.enum(['email', 'id', 'name'], {
    required_error: 'Please select a search type',
  }),
  reason: z.string().min(10, { message: 'Please provide a detailed reason (min 10 characters)' }),
  ticketId: z.string().optional(),
});

type ImpersonationFormValues = z.infer<typeof impersonationFormSchema>;

// Mock user data for demonstration
const mockUsers = [
  { id: 'user123', name: 'John Doe', email: 'john.doe@example.com', role: 'Athlete' },
  { id: 'user456', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Parent' },
  { id: 'user789', name: 'Mike Johnson', email: 'mike.johnson@example.com', role: 'Coach' },
];

export function UserImpersonationForm() {
  const [isSearching, setIsSearching] = useState(false);
  const [isImpersonating, setIsImpersonating] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof mockUsers | null>(null);
  const [selectedUser, setSelectedUser] = useState<(typeof mockUsers)[0] | null>(null);

  const form = useForm<ImpersonationFormValues>({
    resolver: zodResolver(impersonationFormSchema),
    defaultValues: {
      userIdentifier: '',
      searchType: 'email',
      reason: '',
      ticketId: '',
    },
  });

  // Handle search for users
  function onSearch() {
    const { userIdentifier, searchType } = form.getValues();
    
    if (!userIdentifier) {
      form.setError('userIdentifier', { message: 'Please enter a search term' });
      return;
    }
    
    setIsSearching(true);
    setSearchResults(null);
    setSelectedUser(null);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Filter users based on search criteria
      const results = mockUsers.filter(user => {
        const searchTerm = userIdentifier.toLowerCase();
        switch (searchType) {
          case 'email':
            return user.email.toLowerCase().includes(searchTerm);
          case 'id':
            return user.id.toLowerCase().includes(searchTerm);
          case 'name':
            return user.name.toLowerCase().includes(searchTerm);
          default:
            return false;
        }
      });
      
      setSearchResults(results);
      setIsSearching(false);
    }, 1000);
  }

  // Handle form submission for impersonation
  function onSubmit(data: ImpersonationFormValues) {
    if (!selectedUser) {
      toast({
        title: 'Error',
        description: 'Please select a user to impersonate',
        variant: 'destructive',
      });
      return;
    }
    
    setIsImpersonating(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      toast({
        title: 'Impersonation Started',
        description: `You are now impersonating ${selectedUser.name} (${selectedUser.email})`,
      });
      
      // Log impersonation details
      console.log('Impersonation details:', {
        user: selectedUser,
        reason: data.reason,
        ticketId: data.ticketId,
        timestamp: new Date().toISOString(),
      });
      
      setIsImpersonating(false);
      form.reset();
      setSearchResults(null);
      setSelectedUser(null);
    }, 1500);
  }

  return (
    <div className="space-y-6">
      <Alert className="bg-amber-50">
        <IconUserCheck className="h-4 w-4" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          User impersonation is logged and audited. Only use this feature for legitimate support and debugging purposes.
        </AlertDescription>
      </Alert>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <FormField
              control={form.control}
              name="searchType"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/3">
                  <FormLabel>Search By</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select search type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="id">User ID</SelectItem>
                      <SelectItem value="name">Name</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="userIdentifier"
              render={({ field }) => (
                <FormItem className="w-full md:w-2/3">
                  <FormLabel>User Identifier</FormLabel>
                  <div className="flex space-x-2">
                    <FormControl>
                      <Input
                        placeholder="Enter email, ID, or name"
                        {...field}
                      />
                    </FormControl>
                    <Button 
                      type="button" 
                      onClick={onSearch}
                      disabled={isSearching}
                    >
                      {isSearching ? 'Searching...' : 'Search'}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          {searchResults && (
            <div className="rounded-md border p-4">
              <h3 className="text-sm font-medium mb-2">Search Results</h3>
              {searchResults.length > 0 ? (
                <div className="space-y-2">
                  {searchResults.map(user => (
                    <Card 
                      key={user.id} 
                      className={`cursor-pointer ${selectedUser?.id === user.id ? 'border-primary' : ''}`}
                      onClick={() => setSelectedUser(user)}
                    >
                      <CardContent className="p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                          <div>
                            <span className="text-xs bg-secondary px-2 py-1 rounded">{user.role}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No users found matching your search criteria</p>
              )}
            </div>
          )}
          
          {selectedUser && (
            <>
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason for Impersonation</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Explain why you need to impersonate this user"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Provide a detailed explanation for audit purposes.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="ticketId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Support Ticket ID (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter related support ticket ID"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Link this impersonation to a support ticket if applicable.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isImpersonating}
              >
                {isImpersonating ? 'Starting Impersonation...' : `Impersonate ${selectedUser.name}`}
              </Button>
            </>
          )}
        </form>
      </Form>
    </div>
  );
}