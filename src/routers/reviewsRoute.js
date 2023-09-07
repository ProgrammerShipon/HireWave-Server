const express = require('express');
const { postNewReview, getAllReview, getSingleReview, deleteReview, updateReview } = require('../controllers/reviewController');
const reviewsRoute = express.Router();

// review insert data
reviewsRoute.post("/", postNewReview);

// review get all data
reviewsRoute.get("/", getAllReview);

// review Single Data
reviewsRoute.get("/:id", getSingleReview);

// review updated api
reviewsRoute.patch("/:id", updateReview);

// Delete FAQs 
reviewsRoute.delete("/:id", deleteReview);

module.exports = reviewsRoute