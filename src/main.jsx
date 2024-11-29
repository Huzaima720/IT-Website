import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/base.css'
import './styles/fonts.css'
import './styles/variables.css'
import './styles/layout.css'
import './styles/components.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
