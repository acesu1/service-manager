import './index.css'

import { ThemeProvider } from './components/theme-provider'
import { SignIn, useUser } from '@clerk/clerk-react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from './pages/_layouts/app'
import { Dashboard } from './pages'
import { Services } from './pages/services'

export function App() {
  const { user } = useUser()

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <SignIn />
      </div>
    )
  }

  const isAdmin = user.publicMetadata.role === 'admin'

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          {isAdmin && (
            <Route path="/" element={<RootLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/services" element={<Services />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
