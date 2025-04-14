import Middlesection from '../components/Middlesection.jsx'
import Navbar from '../components/Navbar.jsx'
import React from 'react'

const Homepage = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar />
      <Middlesection />
    </div>
  )
}

export default Homepage