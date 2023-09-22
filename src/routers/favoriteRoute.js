const { getAllFavorite, postFavorite, candidateFavorite, recruiterFavorite, deleteFavorite, recruiterFavorites } = require('../controllers/favoriteController')

const favoriteRoute = require('express').Router()

// favorite all data
favoriteRoute.get('/', getAllFavorite);

// favorites only recruiter
favoriteRoute.get("/recruiter_email/:email", recruiterFavorite);

// favorites only recruiter all data
favoriteRoute.get("/recruiters_email/:email", recruiterFavorites);

// favorite data store
favoriteRoute.get("/candidate_email/:email", candidateFavorite);

// favorite data store
// favoriteRoute.get("/candidate_email/:email", candidateFavorite);

// favorite data store
favoriteRoute.post("/", postFavorite);

// favorite delete -> need recruiterEmail + 
favoriteRoute.delete("/:id", deleteFavorite);

// route export
module.exports = favoriteRoute
