import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Dashboard } from './pages/app/dashboard'
import { Requests } from './pages/app/requests/request'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/request',
        element: <Requests />,
      },
    ],
  },
])
