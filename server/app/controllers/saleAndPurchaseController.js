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

// create new purchase controller
const createNewPurchase = async (req, res) => {
    console.log(req.body.product);
    try {
        const data = await Purchase(req.body)
        const datas = await data.save()
        res.send(datas)

        const data3 = await Product.find({ _id: req.body.product })
        const data2 = await Product.findByIdAndUpdate({ _id: req.body.product }, {
            $set: {

                buyPrice: req.body.productRate,
                openingStock: parseInt(req.body.productQuantity) + parseInt(data3[0].openingStock)
            },
        })
        res.status(200).json({
            message: 'Success'
        }).send(data2)
    } catch (error) {
        console.log(error.message);
    }
}

// load all Purchase data
const allPurchase = async (req, res) => {
    try {
        const data = await Purchase.find().populate('product').populate('supplier')
        res.send(data)
    } catch (error) {
        console.log(error.message);
    }
}

// create new sell controller
const createNewSell = async (req, res) => {
    try {
        const data = await Sell(req.body)
        const data2 = await data.save()
        res.status(200).json({
            message: 'Success'
        }).send(data2)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: 'Failed'
        })
    }
}



const stockUpdate = async (req, res) => {
    try {
        const data = await Product.findByIdAndUpdate({ _id: req.body._id }, {
            $set: {
                openingStock: req.body.openingStock
            },
        })
        res.status(200).json({
            message: 'Success'
        }).send(data)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: 'Failed'
        })
    }
}


// load all sale data
const allSale = async (req, res) => {
    try {
        const data = await Sell.find().populate('customer')
        // const data = await Sell.find().populate('product').populate('supplier')
        res.send(data)
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = {
    createNewPurchase,
    allPurchase,
    createNewSell,
    stockUpdate,
    allSale
}