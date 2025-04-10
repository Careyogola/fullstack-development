// dev deps packages
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';

// routes 
import productRoutes from './routes/routes.js'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'


dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 4001;

app.listen(port, ()=>{
    connectDB();
});