const mongoose = require('mongoose')


const supplierSchema = {
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
       
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
}

const Supplier = mongoose.model("Supplier", supplierSchema)
module.exports = Supplier