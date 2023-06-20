//  external imports 
const mongoose = require('mongoose')
// internal imports
const Brand = require("../models/productModals/brandSchema")
const Category = require("../models/productModals/categorySchema")
const Product = require("../models/productModals/productSchema")

// controllers

// bards controller start
// create new brand controller
const createNewBrand = async (req, res) => {
    console.log(req.body);
    try {
        const data = await Brand(req.body)
        const datas = await data.save()
        res.send(datas)
    } catch (error) {
        console.log(error.message);
    }

}

// load all brand data
const allBrands = async (req, res) => {
    try {
        const data = await Brand.find({})
        res.send(data)
    } catch (error) {
        console.log(error.message);
    }
}
// delete brand
const deleteBrand = async (req, res) => {
    try {
        const data = await Brand.deleteOne({ _id: req.params.id })
        res.status(200).json({
            message: 'Delete Success'
        })
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}


const updateBrand = async (req, res) => {

    try {
        const data = await Brand.findByIdAndUpdate({ _id: req.body._id }, {
            $set: {
                title: req.body.title
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
// bards controller end

// category controller start
// create new category controller
const createNewCategory = async (req, res) => {
    console.log(req.body);
    try {
        const data = await Category(req.body)
        const datas = await data.save()
        res.send(datas)
    } catch (error) {
        console.log(error.message);
    }

}

// load all category data
const allCategories = async (req, res) => {
    try {
        const data = await Category.find({})
        res.send(data)
    } catch (error) {
        console.log(error.message);
    }
}
// delete category
const deleteCategory = async (req, res) => {
    try {
        const data = await Category.deleteOne({ _id: req.params.categoryId })
        res.status(200).json({
            message: 'Delete Success'
        })
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}


const updateCategory = async (req, res) => {

    try {
        const data = await Category.findByIdAndUpdate({ _id: req.body._id }, {
            $set: {
                title: req.body.title
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

// category controller end
// product controller start
// create new product controller
const createNewProduct = async (req, res) => {
    console.log(req.body);
    try {
        const data = await Product(req.body)
        const datas = await data.save()
        res.send(datas)
    } catch (error) {
        console.log(error.message);
    }
}

// load all products data
const allProducts = async (req, res) => {
    try {
        const data = await Product.find().populate('brand').populate('category')
        res.send(data)
    } catch (error) {
        console.log(error.message);
    }
}
// delete category
const deleteProduct = async (req, res) => {
    console.log(req.params.productId, 'ok');
    try {
        const data = await Product.deleteOne({ _id: req.params.productId })
        res.status(200).json({
            message: 'Delete Success'
        })
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
const updateProduct = async (req, res) => {

    try {
        const data = await Product.findByIdAndUpdate({ _id: req.body._id }, {
            $set: {
                productName: req.body.productName,
                productCode: req.body.productCode,
                brand: req.body.brand,
                category:req.body.category,
                buyPrice: req.body.buyPrice,
                sellPrice: req.body.sellPrice,
                openingStock: req.body.openingStock,
                productImage: req.body.productImage,
                description: req.body.description
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

// product controller end




module.exports = {
    createNewBrand,
    allBrands,
    deleteBrand,
    updateBrand,

    createNewCategory,
    allCategories,
    deleteCategory,
    updateCategory,

    createNewProduct,
    allProducts,
    deleteProduct,
    updateProduct
}