import React from 'react'

const Middlesection = () => {
  return (
    <div className='flex flex-col text-center justify-center items-center p-7'>
        <p className='text-5xl font-bold mb-8'>Create. Update or Patch .<span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Delete.</span></p>

        <p className='text-2xl font-medium mb-8'>With CreatedStore, you can easily create tests for your modern web applications, debug them visually,<br/> and automatically run them in your continuous integration builds.</p>

        <div className='flex flex-row justify-between gap-10 items-center'>
            <button className='px-10 py-3 border-none bg-teal-400 rounded hover:cursor-pointer'>Add Products</button>
            <button className='px-10 py-3 border-none bg-teal-400 rounded hover:cursor-pointer'>Available Products</button>
        </div>
    </div>
  )
}

export default Middlesection;