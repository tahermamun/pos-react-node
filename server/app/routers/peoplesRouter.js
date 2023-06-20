//  external imports 
const express = require('express')
const peoplesRouter = express.Router()

// internal imports
const { createNewCustomer, allCustomer, deleteCustomer, createNewSupplier, allSupplier, deleteSupplier } = require('../controllers/peoplesController')


// routers
// people routers
peoplesRouter.post('/createNewCustomer', createNewCustomer)
peoplesRouter.get('/allCustomer', allCustomer)
peoplesRouter.delete('/deleteCustomer/:id', deleteCustomer)


// people routers
peoplesRouter.post('/createNewSupplier', createNewSupplier)
peoplesRouter.get('/allSupplier', allSupplier)
peoplesRouter.delete('/deleteSupplier/:id', deleteSupplier)


module.exports = peoplesRouter
