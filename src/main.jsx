import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import Projects from "@/components/Projects.jsx";
import AppHUN from "@/components/AppHUN.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/hu" element={<AppHUN/>}/>
              <Route path="/projects" element={<Projects/>}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
