import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from './pages/_layouts/app'
import { Dashboard } from './pages'
import { Services } from './pages/services'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
])
