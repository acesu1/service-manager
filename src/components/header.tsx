import { Scissors } from 'lucide-react'

import { NavLink } from './nav-link'
import { ThemeToggle } from './theme-toggle'
import { Separator } from './ui/separator'

import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
} from '@clerk/clerk-react'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Scissors className="size-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            Dashboard
          </NavLink>
          <NavLink to="/services">
            Serviços
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center space-x-2">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
