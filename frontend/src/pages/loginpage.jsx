import React from 'react'
import { useState } from 'react'

const Loginpage = () => {

    const[formData, setFormData] = useState({
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
            <h4 className='text-3xl font-bold text-center underline mb-5'>Login Here</h4>
            <form  onSubmit={handleSubmit} className='flex flex-col gap-4 w-[400px]'>
                
                <label htmlFor='name'>Email</label>
                <input 
                type='email'
                placeholder='Enter your email address'
                name='email'
                value={formData.email}
                required
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        email: e.target.value
                    })
                }}
                className='bg-amber-50 py-2 rounded px-2 items-center'
                />
                <label htmlFor='name'>Password</label>
                <input 
                type='password'
                placeholder='********'
                name='password'
                maxLength={15}
                value={formData.password}
                required
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        password: e.target.value
                    })
                }}
                className='bg-amber-50 py-2 rounded px-2 items-center'
                />

                <button className='px-10 py-3 border-none bg-teal-950 text-teal-50 hover:bg-teal-400 rounded hover:cursor-pointer'>
                Log in
                </button>
            </form>
        </div>
    </div>
  )
}

export default Loginpage;