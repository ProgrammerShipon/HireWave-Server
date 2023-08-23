const express = require('express')
const { insertAllJobController, getAllJobController } = require('../controllers/allJobController')
const allJobRoute = express.Router()

/**
 * any data insert or post mongoose
 * (root route)/all-jobs/insert-many
 */
allJobRoute.get('/insert-many', insertAllJobController)

/**
 * get all data
 * (root route)/all-jobs/
 */
allJobRoute.get('/', getAllJobController)

module.exports = allJobRoute