
const productModel = require('../models/productModel');
const ProductModel = require('../models/productModel');


//Get Products API - /api/v1/product
exports.getProducts = async (req, res, next) => {

    const products = await ProductModel.find({});

    res.json(
        {
            success: true,
            products

        }
    )
}

//Get Single Products API - /api/v1/product/:id
exports.getSingleProduct = async(req, res, next) => {
    
    try {
        const product= await productModel.findById(req.params.id)
        res.json(
            {
                success: true,
                product
    
            }
        )
    } catch (error) {
        res.status(404).json(
            {
                success: false,
                message: 'Sorry this product is not found'
    
            }
        )
    }
  
}