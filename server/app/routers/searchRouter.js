//  external imports 
const express = require('express')


// internal imports
const { findProductByName,findSaleById,findSaleByCustomerName} = require('../controllers/searchController')



const searchRouter = express.Router()


// routers
searchRouter.get('/findProductByName/:productName', findProductByName)
searchRouter.get('/findSaleById/:sellId', findSaleById)
searchRouter.get('/findSaleByCustomerName/:sellCustomerName', findSaleByCustomerName)



module.exports = searchRouter