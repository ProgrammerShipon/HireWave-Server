const express = require('express')
const { getAllJobController } = require('../controllers/allJobController')
const allJobRoute = express.Router()

/**
 * any data insert or post mongodb
 * (root route)/all-jobs/insert-many
 */
allJobRoute.get('/insert-many', getAllJobController)

module.exports = allJobRoute