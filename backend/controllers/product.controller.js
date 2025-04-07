
export const getProducts = async (req, res)=>{
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
}

export const createProducts = async (req, res)=>{
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
}

export const updateProduct = async (req, res)=>{
    const { id } = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({
            success: false,
            message: 'Invalid product Id',
        })
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({
            success: true,
            data: updatedProduct,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        })
    }
}

export const deleteProduct = async (req, res)=>{
    const  { id } = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({
            success: false,
            message: 'Invalid product Id',
        })
    }

    try {
        const deletedProduct = await Product.findByIdAndDelete(id, product, {new: true});
        res.status(200).json({
            success: true,
            data: deletedProduct,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }

}
