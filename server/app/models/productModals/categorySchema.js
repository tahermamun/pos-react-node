const mongoose = require('mongoose')


const categorySchema = {
    title: {
        type: String,
        require: true
    }
}

const Category = mongoose.model("Category", categorySchema)
module.exports = Category