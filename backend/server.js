import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();
const app = express();

app.use(express.json());

app.get('/api/products', async (req, res)=>{
    try {
        const  products = await Product.find({});
        res.status(200).json({
            success: true,
            data: products
        })
    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Server Error',
        })
    }
})

app.post('/api/products', async (req, res)=>{
    const product = req.body;

    if (!product.name && !product.price && !product.image) {
        return res.status(400).json({
            success: false, 
            message: "please provide all fields"
        })
    } 

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct,
        });
    } catch (error) {
        console.error(`Error in create product: ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
})

// console.log(process.env.MONGO_URL);

app.listen(5500, ()=>{
    connectDB();
});