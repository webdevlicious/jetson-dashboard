import { useAuthStore } from '@/stores/authStore'
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { UserIcon } from 'lucide-react'

type UserRole = 'athlete' | 'coach' | 'parent' | 'scout' | 'trainer' | 'developer' | 'owner' | 'counselor'

interface UserTypeOption {
  role: UserRole
  label: string
}

const userTypes: UserTypeOption[] = [
  { role: 'athlete', label: 'Athlete Dashboard' },
  { role: 'coach', label: 'Coach Dashboard' },
  { role: 'parent', label: 'Parent Dashboard' },
  { role: 'scout', label: 'Scout Dashboard' },
  { role: 'trainer', label: 'Trainer Dashboard' },
  { role: 'developer', label: 'Developer Dashboard' },
  { role: 'owner', label: 'Owner Dashboard' },
  { role: 'counselor', label: 'Counselor Dashboard' },
]

export function UserTypeSwitcher() {
  const setUser = useAuthStore((state) => state.auth.setUser)
  const currentUser = useAuthStore((state) => state.auth.user)
  
  const handleSwitchUserType = (role: UserRole) => {
    // Update the user role in the auth store
    if (currentUser) {
      setUser({
        ...currentUser,
        role: [role],
      })
    } else {
      // If no user is set, create a mock user with the selected role
      setUser({
        accountNo: 'test-account',
        email: `test-${role}@example.com`,
        role: [role],
        exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour from now
      })
    }
  }

  return (
    <>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>
        <div className="flex items-center gap-2">
          <UserIcon className="h-4 w-4" />
          <span>Test User Types</span>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuGroup>
        {userTypes.map((userType) => (
          <DropdownMenuItem
            key={userType.role}
            onClick={() => handleSwitchUserType(userType.role)}
            className={currentUser?.role[0] === userType.role ? 'bg-accent' : ''}
          >
            {userType.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuGroup>
    </>
  )
}