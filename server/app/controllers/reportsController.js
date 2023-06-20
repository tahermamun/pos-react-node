//  external imports 
const mongoose = require('mongoose')

// internal imports
const Customer = require("../models/peopleModals/customerSchema")
const Supplier = require("../models/peopleModals/supplierSchema")
const Sell = require("../models/saleAndPurchaseModals/newSellSchema")


// controllers


// get all customers
const allSaleDailyReport = async (req, res) => {
    console.log(req.params.reportDate);
    try {
        const data = await Sell.find({ purchaseDate: req.params.reportDate, }).populate('customer')
        res.send(data)
    } catch (error) {
        console.log(error.message);
    }
}


// delete supplier
const deleteSupplier = async (req, res) => {
    try {
        const data = await Supplier.deleteOne({ _id: req.params.id })
        res.status(200).json({
            message: 'Delete Success'
        })
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}









module.exports = {
    allSaleDailyReport,
    deleteSupplier
}