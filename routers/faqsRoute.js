const express = require('express')
const { faqsInsertMany, faqsGetData } = require('../controllers/faqsController')
const faqsRoute = express.Router()

// data insert in database
faqsRoute.get('/inset-data', faqsInsertMany)

// get all data 
faqsRoute.get('/', faqsGetData)

module.exports = faqsRoute