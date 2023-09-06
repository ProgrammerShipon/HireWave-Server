const express = require('express');
const { insertFaqs, getFaqs, faqsSingleData, faqsUpdate, deleteFAQs } = require('../controllers/faqsController');
const faqsRoute = express.Router()

// FAQs insert data
faqsRoute.post("/", insertFaqs);

// FAQs get all data
faqsRoute.get("/", getFaqs);

// FAQs Single Data
faqsRoute.get("/:id", faqsSingleData);

// FAQs updated api
faqsRoute.patch("/:id", faqsUpdate);

// Delete FAQs 
faqsRoute.delete("/:id", deleteFAQs);

module.exports = faqsRoute