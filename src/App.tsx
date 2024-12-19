import './index.css'

import { ThemeProvider } from './components/theme-provider'
import { ThemeToggle } from './components/theme-toggle'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ThemeToggle />
    </ThemeProvider>
  )
}
