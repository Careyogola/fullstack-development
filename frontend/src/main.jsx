import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Createpage from './pages/createpage.jsx'
import Productspage from './pages/productspage.jsx'
// import { ThemeProvider } from 'next-themes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider attribute="class"> */}
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/create' element={<Createpage />}/>
          <Route path='/products' element={<Productspage />} />
        </Routes>
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </StrictMode>
)
