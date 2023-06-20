const mongoose = require('mongoose')


const brandSchema = {
    title: {
        type: String,
        require: true
    }
}

const Brand = mongoose.model("Brand", brandSchema)
module.exports = Brand