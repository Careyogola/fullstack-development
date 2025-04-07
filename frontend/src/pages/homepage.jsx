import Middlesection from '../components/Middlesection.jsx'
import Navbar from '../components/Navbar.jsx'
import React from 'react'

const Homepage = () => {
  return (
    <div className='bg-linear-to-t from-teal-200 to-teal-50 w-full h-screen flex flex-col'>
      <Navbar />
      <Middlesection />
    </div>
  )
}

export default Homepage