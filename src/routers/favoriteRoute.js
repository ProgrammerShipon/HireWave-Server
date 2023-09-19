const { getAllFavorite, postFavorite, candidateFavorite, recruiterFavorite } = require('../controllers/favoriteController')

const favoriteRoute = require('express').Router()

// favorite all data
favoriteRoute.get('/', getAllFavorite);

// favorite data store
favoriteRoute.get("/recruiter_email/:email", recruiterFavorite);

// favorite data store
favoriteRoute.get("/candidate_email/:email", candidateFavorite);

// favorite data store
favoriteRoute.post("/", postFavorite);

// route export
module.exports = favoriteRoute
