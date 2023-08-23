const express = require('express');
const reviewsRoute = express.Router();

const { getReviews, insertReview } = require('../controllers/reviewController');

// insert data
reviewsRoute.post("/insert", insertReview);

// get all reviews data
reviewsRoute.get("/", getReviews);

module.exports = reviewsRoute