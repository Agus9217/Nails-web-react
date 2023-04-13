import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/styles.scss'
import { RouterProvider } from 'react-router-dom'
import { routerApp } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ routerApp } />
  </React.StrictMode>,
)
