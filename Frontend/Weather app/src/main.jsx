import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterContextProvider } from 'react-router-dom'
import Result from './pages/Result.jsx'


createRoot(document.getElementById('root')).render(
  
        <App />
      
  ,
)
