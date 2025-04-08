import React, { useState } from 'react';

const Createpage = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Price: '',
    Image: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your API or Firestore logic here
  };

  return (
    <div className='flex flex-col items-center justify-center p-7 h-screen'>
      <div className='border-none shadow rounded p-6'>
        <p className='text-4xl mb-5 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
          Create Products
        </p>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <label htmlFor='Name'>Product Name:</label>
          <input 
            id='Name'
            name='Name'
            type='text'
            value={formData.Name}
            onChange={handleChange}
            className='w-96 h-12 px-3 py-3 bg-teal-50'
            placeholder='Enter Product Name'
          />

          <label htmlFor='Price'>Product Price:</label>
          <input 
            id='Price'
            name='Price'
            type='number'
            value={formData.Price}
            onChange={handleChange}
            className='w-96 h-12 px-3 py-3 bg-teal-50'
            placeholder='Product Price'
          />

          <label htmlFor='Image'>Product Image URL:</label>
          <input 
            id='Image'
            name='Image'
            type='text'
            value={formData.Image}
            onChange={handleChange}
            className='w-96 h-12 px-3 py-3 bg-teal-50'
            placeholder='Product Image URL'
          />

          <button type='submit' className='px-10 py-3 border-none bg-teal-400 rounded hover:cursor-pointer'>
            Create product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createpage;
