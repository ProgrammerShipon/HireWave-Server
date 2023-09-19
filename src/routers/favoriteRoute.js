const { getAllFavorite, postFavorite } = require('../controllers/favoriteController')

const favoriteRoute = require('express').Router()

// favorite all data
favoriteRoute.get('/', getAllFavorite);

// favorite data store
favoriteRoute.post("/", postFavorite);

module.exports = favoriteRoute
