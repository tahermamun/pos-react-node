//  external imports 
const express = require('express')


// internal imports
const { allSaleDailyReport} = require('../controllers/reportsController')



const reportsRouter = express.Router()


// routers
// brands routers
// reportsRouter.post('/createNewBrand', createNewBrand)
reportsRouter.get('/allSaleDailyReport/:reportDate', allSaleDailyReport)
// reportsRouter.delete('/deleteBrand/:id', deleteBrand)
// reportsRouter.post('/updateBrand', updateBrand)





module.exports = reportsRouter