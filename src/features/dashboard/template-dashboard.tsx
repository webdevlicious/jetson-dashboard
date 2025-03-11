import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

const topNav = [
  { title: 'Overview', href: '/dashboard', isActive: true, disabled: false },
  { title: 'Templates', href: '/dashboard/templates', isActive: false, disabled: false },
  { title: 'Settings', href: '/dashboard/settings', isActive: false, disabled: false },
]

export function TemplateDashboard() {
  return (
    <>
      <Header>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        {/* Empty main content area */}
        <div className="p-6">
          <h1 className='text-2xl font-bold tracking-tight'>Template Dashboard</h1>
        </div>
      </Main>
    </>
  )
}