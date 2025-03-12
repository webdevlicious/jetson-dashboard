import { HTMLAttributes, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconBrandFacebook, IconBrandGithub } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/password-input';

type SignUpFormProps = HTMLAttributes<HTMLDivElement>;

// Define the schema for form validation
const formSchema = z
  .object({
    role: z.enum(['athlete', 'parent']),
    email: z
      .string()
      .min(1, { message: 'Please enter your email' })
      .email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(1, { message: 'Please enter your password' })
      .min(7, { message: 'Password must be at least 7 characters long' }),
    confirmPassword: z.string(),
    firstName: z.string().min(1, { message: 'Please enter your first name' }),
    lastName: z.string().min(1, { message: 'Please enter your last name' }),
    parentEmail: z.string().email().optional(),
    parentFirstName: z.string().optional(),
    parentLastName: z.string().optional(),
    athleteEmail: z.string().email().optional(),
    athleteFirstName: z.string().optional(),
    athleteLastName: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword'],
  });

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState<'athlete' | 'parent'>('athlete');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: 'athlete',
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      parentEmail: '',
      parentFirstName: '',
      parentLastName: '',
      athleteEmail: '',
      athleteFirstName: '',
      athleteLastName: '',
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // eslint-disable-next-line no-console
    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            {/* Role Selection */}
            <FormField
              control={form.control}
              name='role'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sign up as:</FormLabel>
                  <FormControl>
                    <div className='flex space-x-4'>
                      <Button
                        type='button'
                        variant={role === 'athlete' ? 'default' : 'outline'}
                        onClick={() => {
                          field.onChange('athlete');
                          setRole('athlete');
                        }}
                      >
                        Athlete
                      </Button>
                      <Button
                        type='button'
                        variant={role === 'parent' ? 'default' : 'outline'}
                        onClick={() => {
                          field.onChange('parent');
                          setRole('parent');
                        }}
                      >
                        Parent
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Common Fields */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='name@example.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder='********' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder='********' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your first name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your last name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Conditional Fields */}
            {role === 'athlete' && (
              <>
                <FormField
                  control={form.control}
                  name='parentEmail'
                  render={({ field }) => (
                    <FormItem className='space-y-1'>
                      <FormLabel>Parent's Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your parent's email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='parentFirstName'
                  render={({ field }) => (
                    <FormItem className='space-y-1'>
                      <FormLabel>Parent's First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your parent's first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='parentLastName'
                  render={({ field }) => (
                    <FormItem className='space-y-1'>
                      <FormLabel>Parent's Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your parent's last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {role === 'parent' && (
              <>
                <FormField
                  control={form.control}
                  name='athleteEmail'
                  render={({ field }) => (
                    <FormItem className='space-y-1'>
                      <FormLabel>Athlete's Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your athlete's email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='athleteFirstName'
                  render={({ field }) => (
                    <FormItem className='space-y-1'>
                      <FormLabel>Athlete's First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your athlete's first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='athleteLastName'
                  render={({ field }) => (
                    <FormItem className='space-y-1'>
                      <FormLabel>Athlete's Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your athlete's last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <Button className='mt-2' disabled={isLoading}>
              Create Account
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}