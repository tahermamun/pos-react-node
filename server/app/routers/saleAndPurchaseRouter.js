//  external imports 
const express = require('express')


// internal imports
const { createNewPurchase, allPurchase, createNewSell, stockUpdate, allSale } = require('../controllers/saleAndPurchaseController')



const posRouter = express.Router()


// routers
// purchase routers
posRouter.post('/createNewPurchase', createNewPurchase)
posRouter.get('/allPurchase', allPurchase)
// posRouter.delete('/deleteBrand/:id', deleteBrand)
// posRouter.post('/updateBrand', updateBrand)


// sell routers
posRouter.post('/createNewSell', createNewSell)
posRouter.post('/stockUpdate', stockUpdate)
posRouter.get('/allSale', allSale)



module.exports = posRouter