import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/components'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from './pages/About/About';
// 
// const router = createBrowserRouter([
  // {
    // path: "/",
    // element: <App />
  // },
  // {
  // path: "/about",
  // element: <About/>
// },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>,
)
