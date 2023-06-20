//  external imports 
const mongoose = require('mongoose')

// internal imports
const Customer = require("../models/peopleModals/customerSchema")
const Supplier = require("../models/peopleModals/supplierSchema")


// controllers

// create new Customer controller
const createNewCustomer = async (req, res) => {
    console.log(req.body);
    try {
        const data = await Customer(req.body)
        const datas = await data.save()
        res.send(datas)
    } catch (error) {
        console.log(error.message);
    }

}
// get all customers
const allCustomer = async (req, res) => {
    try {
        const data = await Customer.find({})
        res.send(data)
    } catch (error) {
        console.log(error.message);
    }
}

// delete Customer
const deleteCustomer = async (req, res) => {
    try {
        const data = await Customer.deleteOne({ _id: req.params.id })
        res.status(200).json({
            message: 'Delete Success'
        })
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}


// create new supplier controller
const createNewSupplier = async (req, res) => {
    console.log(req.body);
    try {
        const data = await Supplier(req.body)
        const datas = await data.save()
        res.send(datas)
    } catch (error) {
        console.log(error.message);
    }

}

// get all supplier
const allSupplier = async (req, res) => {
    try {
        const data = await Supplier.find({})
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









module.exports={
    createNewCustomer,
    allCustomer,
    deleteCustomer,
    createNewSupplier,
    allSupplier,
    deleteSupplier
}