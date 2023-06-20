const mongoose = require('mongoose')


const purchaseSchema = {
    supplier: {
        type: mongoose.Types.ObjectId,
        ref: "Supplier",
    },
    
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
    },

    purchaseDate: {
        type: String,
        require: true
    },
    productRate: {
        type: String,
        require: true
    },
    productQuantity: {
        type: String,
        require: true
    },
    totalAmount: {
        type: String,
        require: true
    }

}



const Purchase = mongoose.model("Purchase", purchaseSchema)
module.exports = Purchase