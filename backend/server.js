import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/routes.js'

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

// console.log(process.env.MONGO_URL);
const port = process.env.PORT || 4001;

app.listen(port, ()=>{
    connectDB();
});