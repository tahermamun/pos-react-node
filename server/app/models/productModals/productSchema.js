const mongoose = require('mongoose')


const productSchema = {
    productName: {
        type: String,
        require: true
    },
    productCode: {
        type: String,
        require: true
    },
    brand: {
        type: mongoose.Types.ObjectId,
        ref:"Brand",
        
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref:"Category",
        
    },
    buyPrice: {
        type: String,
        require: true
    },
    sellPrice: {
        type: String,
        require: true
    },
    openingStock: {
        type: String,
        require: true
    },

    purchaseQuantity: {
        type: String,
        require: true
    },


    productImage: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
}



const Product = mongoose.model("Product", productSchema)
module.exports = Product