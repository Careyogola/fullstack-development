import { create } from 'zustand'

export const useProductStore = create((set)=>({
    products:[],
    setProducts:(products)=> set({ products }),

    createProducts: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image){
            return {success: false, message: 'please provide all fields.'}
        }
        const res = await fetch('/api/products',{
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
    })
    const data = await res.json();
    set((state)=> ({products:[...state.products, data.data]}))
    return { success: true, message: 'Product created successfully.'}
    }
}))