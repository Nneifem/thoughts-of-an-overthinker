import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        index: '/signup',
        element: <Signup />
      },
      {
        index: '/login',
        element: <Login />
      },
    ],
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
