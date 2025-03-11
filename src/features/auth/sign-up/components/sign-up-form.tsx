import { HTMLAttributes, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconBrandFacebook, IconBrandGithub } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/password-input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

type SignUpFormProps = HTMLAttributes<HTMLDivElement>

const formSchema = z.object({
  role: z.enum(['athlete', 'parent']),
  email: z
    .string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(1, { message: 'Please enter your password' })
    .min(8, { message: 'Password must be at least 8 characters long' }),
  firstName: z.string().min(1, { message: 'Please enter your first name' }),
  lastName: z.string().min(1, { message: 'Please enter your last name' }),
  parentEmail: z.string().email({ message: 'Invalid email address' }).optional(),
  parentFirstName: z.string().optional(),
  parentLastName: z.string().optional(),
  athleteEmail: z.string().email({ message: 'Invalid email address' }).optional(),
  athleteFirstName: z.string().optional(),
  athleteLastName: z.string().optional(),
})

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [role, setRole] = useState<'athlete' | 'parent'>('athlete')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: 'athlete',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      parentEmail: '',
      parentFirstName: '',
      parentLastName: '',
      athleteEmail: '',
      athleteFirstName: '',
      athleteLastName: '',
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // eslint-disable-next-line no-console
    console.log(data)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            <FormField
              control={form.control}
              name='role'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sign up as:</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value: 'athlete' | 'parent') => {
                        field.onChange(value)
                        setRole(value)
                      }}
                      defaultValue={field.value}
                      className='flex space-x-4'
                    >
                      <FormItem className='flex items-center space-x-2'>
                        <FormControl>
                          <RadioGroupItem value='athlete' />
                        </FormControl>
                        <FormLabel>Athlete</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-2'>
                        <FormControl>
                          <RadioGroupItem value='parent' />
                        </FormControl>
                        <FormLabel>Parent</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                    <FormItem>
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
                    <FormItem>
                      <FormLabel>Athlete's First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your athlete's first name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='athleteLastName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Athlete's Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your athlete's last name"
                          {...field}
                        />
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

            <div className='relative my-2'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                  Or continue with
                </span>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <Button
                variant='outline'
                className='w-full'
                type='button'
                disabled={isLoading}
              >
                <IconBrandGithub className='h-4 w-4' /> GitHub
              </Button>
              <Button
                variant='outline'
                className='w-full'
                type='button'
                disabled={isLoading}
              >
                <IconBrandFacebook className='h-4 w-4' /> Facebook
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
