const express = require('express')
const { insertAllJobController, getAllJobController } = require('../controllers/allJobController')
const router = express.Router()

/**
 * any data insert or post mongoose
 * (root route)/all-jobs/insert-many
 */
router.get('/insert-many', insertAllJobController)

/**
 * get all data
 * (root route)/all-jobs/
 */
router.get('/allJobs', getAllJobController)

module.exports = router