const express = require('express')

const {getAllCategory, getACategory, postAllCategory, deleteACategoryPost, postOneCategoryData  } = require('../controllers/allCategoryController')
const allCategoryRoute = express.Router()

// Post many  Category
allCategoryRoute.post('/many', postAllCategory)

// Post one  Category
allCategoryRoute.post('/', postOneCategoryData)

// Get all Category Post
allCategoryRoute.get('/', getAllCategory)

// Get a  Category Post
allCategoryRoute.get('/:id', getACategory)

// Delete A Category Post
allCategoryRoute.delete('/:id', deleteACategoryPost)


module.exports = allCategoryRoute;