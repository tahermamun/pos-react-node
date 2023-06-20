const mongoose = require('mongoose')


const customerSchema = {
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

const Customer = mongoose.model("Customer", customerSchema)
module.exports = Customer