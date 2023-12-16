import Product from "../schema/product.schema.js";

export const create =async (req,res) =>{
    try{
        const data = req.body
        const product = new Product(data)
        await product.save()
        res.status(200).json(product)
    }
    catch(err){
         res.status(424).json(err.message)
    }
}