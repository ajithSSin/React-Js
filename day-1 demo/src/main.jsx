import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Day1 from './Day1_ref.jsx'
import App_Day1 from './day1_ref.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <App_Day1/>   {/** first day App function */}
    <App />       {/**Second App function */}
  </StrictMode>,
)