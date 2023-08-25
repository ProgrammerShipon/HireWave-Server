const express = require('express')
const {
  faqsInsertOne,
  faqsGetData,
  faqsSingleData,
} = require("../controllers/faqsController");
const faqsRoute = express.Router()

// data insert in database
faqsRoute.post("/", faqsInsertOne);

// get all data 
faqsRoute.get('/', faqsGetData)

// get single data 
faqsRoute.get('/:id', faqsSingleData)

module.exports = faqsRoute