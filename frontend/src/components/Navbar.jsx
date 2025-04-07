import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-inherit w-full mb-10 shadow-sm p-7'>
      <div className='flex flex-row justify-between'>
      <div className='flex flex-row gap-4 justify-evenly items-center text-black'>
        <a href='/' className='text-2xl font-bold'>Created<span className='text-teal-900'>Store!</span></a>
        <a href='/products'>Products</a>
        <a href='/docs'>Docs</a>
        <a href='/deleted'>DeletedProducts</a>
        <a href='/updated'>UpdatedProducts</a>
      </div>

      <div className='flex flex-row justify-evenly items-center gap-4'>
        <a href='/signin'>Sign In</a>
        <a href='/signup'>Create Account</a>
        <a href='/contact'>Contact Sales</a>
      </div>
      </div>
    </div>
  )
}

export default Navbar