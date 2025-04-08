import React from 'react'
import { useState } from 'react'

const Signuppage = () => {

    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('user:', formData);
      };

  return (
    <div className='w-full flex bg-linear-to-t from-teal-300 via-teal-600 to-teal-500 items-center justify-center p-7 h-screen'>
        <div className='border-none rounded shadow-2xl  p-6 flex flex-col'>
            <h4 className='text-3xl font-medium mb-5'>Register account here</h4>
            <form  onSubmit={handleSubmit} className='flex flex-col gap-4 w-[400px]'>
                <label htmlFor='name'>Full Name</label>
                <input 
                type='text'
                placeholder='Enter your name'
                name='name'
                value={formData.name}
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        name: e.target.value
                    })
                }}
                className='bg-amber-50 py-2 rounded px-2 items-center'
                />
                <label htmlFor='name'>Email</label>
                <input 
                type='email'
                placeholder='Enter your email address'
                name='email'
                value={formData.email}
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        name: e.target.value
                    })
                }}
                className='bg-amber-50 py-2 rounded px-2 items-center'
                />
                <label htmlFor='name'>Password</label>
                <input 
                type='password'
                placeholder='********'
                name='passwword'
                value={formData.password}
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        name: e.target.value
                    })
                }}
                className='bg-amber-50 py-2 rounded px-2 items-center'
                />

                <button className='px-10 py-3 border-none bg-teal-400 rounded hover:cursor-pointer'>
                Create account
                </button>
            </form>
        </div>
    </div>
  )
}

export default Signuppage;