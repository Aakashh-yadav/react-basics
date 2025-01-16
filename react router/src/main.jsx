import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import LinkLayout from './LinkLayout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/ContactUs'
import User from './Components/User/User'
import Github from './Components/Github'

const router = createBrowserRouter([
  {
    path: '/',
    element:<LinkLayout/>,
    children: 
    [
      {
        path: 'Home',
        element: <Home/>
      },
      {
      path:'about',
      element:<About/>
      },
      {
        path:'Contact',
        element:<Contact/>
      },
      {
        path:'user/:id',
        element:<User/>
      },
      {
        path:'Github',
        element:<Github/>
      }


    ]
    //we made this is use just in place of outlet on the place of outlet there will be home or about 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
