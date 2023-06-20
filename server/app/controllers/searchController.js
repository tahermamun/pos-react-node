//  external imports 
const mongoose = require('mongoose')
// internal imports
const Brand = require("../models/productModals/brandSchema")
const Category = require("../models/productModals/categorySchema")
const Product = require("../models/productModals/productSchema")
const Purchase = require("../models/saleAndPurchaseModals/purchaseSchema")
const supplier = require("../models/peopleModals/supplierSchema")
const Sell = require("../models/saleAndPurchaseModals/newSellSchema")

// controllers


// search product by product name
const findProductByName = async (req, res) => {

    try {
        const name = req.params.productName
        const data = await Product.find({ productName: new RegExp('^' + name + '$', "i") })
        res.send(data)
    } catch (error) {
        console.log(error.message);
    }
}
// search sale by id name
const findSaleById = async (req, res) => {

    try {
        const param = req.params.sellId
        const data = await Sell.find({ _id: param })
        res.send(data)
    } catch (error) {
        console.log(error.message);
    }
}

// search sale by customer name
const findSaleByCustomerName = async (req, res) => {

    try {
        const param = req.params.sellCustomerName
        console.log(param);
        const data = await Sell.find({ name: new RegExp('^' + param + '$', "i") }).populate('customer')
        res.send(data)
    } catch (error) {
        console.log(error.message);
    }
}







module.exports = {
    findProductByName,
    findSaleById,
    findSaleByCustomerName
}