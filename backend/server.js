
import express from 'express';
import connectDB from './config/db.js';
const app = express();

app.get('/products', async (req, res)=>{
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success: false, 
            message: "please provide all fields"
        })
    } 
    res.send('Welcome to Fullstack Development !')
})

// console.log(process.env.MONGO_URL);

app.listen(5500, ()=>{
    connectDB();
});