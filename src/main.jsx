import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ScrollPage from './assets/hooks/ScrollPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollPage />
  <App />
  </BrowserRouter>
  
)
