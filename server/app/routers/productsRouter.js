//  external imports 
const express = require('express')


// internal imports
const {
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
} = require('../controllers/productsController')



const productsRouter = express.Router()


// routers
// brands routers
productsRouter.post('/createNewBrand', createNewBrand)
productsRouter.get('/allBrands', allBrands)
productsRouter.delete('/deleteBrand/:id', deleteBrand)
productsRouter.post('/updateBrand', updateBrand)

// categories routers
productsRouter.post('/createNewCategory', createNewCategory)
productsRouter.get('/allCategories', allCategories)
productsRouter.delete('/deleteCategory/:categoryId', deleteCategory)
productsRouter.post('/updateCategory', updateCategory)

// products routers
productsRouter.post('/createNewProduct', createNewProduct)
productsRouter.get('/allProducts', allProducts)
productsRouter.delete('/deleteProduct/:productId', deleteProduct)
productsRouter.post('/updateProduct', updateProduct)



module.exports = productsRouter