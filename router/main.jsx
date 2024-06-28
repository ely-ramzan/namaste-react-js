import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contactUs/ContactUs.jsx'
import User from './components/user/User.jsx'
import Github, { getInfroFromGithub } from './components/github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//       {
//         path:'',
//         element: <Home/>
//       },{
//         path:'about',
//         element:<About/>
//       },{
//         path:'contactUs',
//         element:<Contact/>
//       }
//     ]
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contactUs' element={<Contact/>}></Route>
        <Route path='user/:id' element={<User/>}></Route>
        <Route 
        loader = {getInfroFromGithub} path='github' element={<Github/>}>  </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
