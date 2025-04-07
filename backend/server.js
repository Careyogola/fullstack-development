import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';
import productRoutes from './routes/routes.js'

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

// console.log(process.env.MONGO_URL);

app.listen(5500, ()=>{
    connectDB();
});