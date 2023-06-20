const mongoose = require('mongoose')


const SellSchema = {
    customer: {
        type: mongoose.Types.ObjectId,
        ref: "Customer",
    },
    itemsPrice: {
        type: String,
        require: true
    },
    purchaseDate: {
        type: String,
        require: true
    },
    shippingPrice: {
        type: String,
        require: true
    },
    taxPrice: {
        type: String,
        require: true
    },
    totalPrice: {
        type: String,
        require: true
    },
    sellingProducts: {
        type: Array,
        require: true
    },

}



const Sell = mongoose.model("Sell", SellSchema)
module.exports = Sell