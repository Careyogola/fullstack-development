import React from 'react'

const Createpage = () => {
  return (
    <div className='flex flex-col items-center justify-center p-7 h-screen'>
      <div className='border-none shadow rounded p-6'>
      <p className='text-4xl mb-5 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Create Products</p>

      <form className='flex flex-col gap-5'>
        <input 
          placeholder='Enter Product Name' 
          name='name'
          type='text'
          className='w-96 h-12 px-3 py-3 bg-teal-50'
        />
        <input 
          placeholder='Product Price' 
          name='name'
          type='number'
          className='w-96 h-12 px-3 py-3 bg-teal-50'
        />
        <input 
          placeholder='Products image url' 
          name='name'
          type='text'
          className='w-96 h-12 px-3 py-3 bg-teal-50'
        />
        <button className='px-10 py-3 border-none bg-teal-400 rounded hover:cursor-pointer'>Create product
        </button>
      </form>
    </div>
    </div>
  )
}

export default Createpage;