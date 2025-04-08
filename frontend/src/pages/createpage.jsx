import { useProductStore } from '../store/product.js';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Createpage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const notify = () => toast.success('Product created successfully.', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Slide,
      });

  const notified = () => toast.success('Product creation failed!.', {
    position: "top-right",
    autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
  })

  // const handleChange = (e) => {
  //   setNewProduct({ 
  //     ...newProduct, 
  //     [e.target.name]: e.target.value 
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('product:', newProduct);
  };

  const { createProducts } = useProductStore();

  const handleProduct = async () =>{
    const { success } = await createProducts(newProduct);
    // console.log('success:', success);
    // console.log('message:', message);
    // console.log(newProduct)
    if(success){
      notify();
    } else {
      notified();
    }
  }

  return (
    <div className='flex bg-linear-to-t from-teal-400 via-teal-800 to-teal-500 w-full items-center justify-center p-7 h-screen'>
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
            value={newProduct.name}
            onChange={(e)=>{
              setNewProduct({
                ...newProduct,
                name: e.target.value
              })
            }}
            className='w-96 h-12 px-3 py-3 bg-teal-50'
            placeholder='Enter Product Name'
          />

          <label htmlFor='Price'>Product Price:</label>
          <input 
            id='Price'
            name='Price'
            type='number'
            value={newProduct.price}
            onChange={(e)=>{
              setNewProduct({
                ...newProduct,
                price: e.target.value
              })
            }}
            className='w-96 h-12 px-3 py-3 bg-teal-50'
            placeholder='Product Price'
          />

          <label htmlFor='Image'>Product Image URL:</label>
          <input 
            id='Image'
            name='Image'
            type='text'
            value={newProduct.image}
            onChange={(e)=>{
              setNewProduct({
                ...newProduct,
                image: e.target.value
              })
            }}
            className='w-96 h-12 px-3 py-3 bg-teal-50'
            placeholder='Product Image URL'
          />

        
          <button onClick={handleProduct} className='px-10 py-3 border-none bg-teal-400 rounded hover:cursor-pointer'>
            Add product
          </button>
          <ToastContainer
                        position="bottom-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        // transition={Slide}
                      />
        </form>
      </div>
    </div>
  );
};

export default Createpage;
