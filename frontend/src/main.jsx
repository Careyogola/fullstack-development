import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Createpage from './pages/createpage.jsx'
// import { ThemeProvider } from 'next-themes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider attribute="class"> */}
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/create' element={<Createpage />}/>
        </Routes>
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </StrictMode>
)
