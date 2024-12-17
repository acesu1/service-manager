import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './pages'
import { Services } from './pages/services'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/services',
    element: <Services />,
  },
])
