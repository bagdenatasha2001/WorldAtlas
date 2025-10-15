import React from 'react'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Country from './pages/Country'
import AppLayout from './components/Layout/AppLayout'
import Error from './pages/Error/Error.jsx'
import CountryDetails from './components/CountryCard/CountryDetials.jsx'



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<Error/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/country",
          element: <Country />
        },
        {
          path: "/country/:name",
          element: <CountryDetails />
        }
      ]
    }
  ]
)





export default function App() {
  return <RouterProvider router={router}>

  </RouterProvider>


}
