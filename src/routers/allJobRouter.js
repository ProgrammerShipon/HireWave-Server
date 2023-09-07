const express = require('express')

const { getAllJob, postAllJob, getAJob, deleteAJobPost, postOneJob } = require('../controllers/allJobController')
const allJobRoute = express.Router()

// Post a Job
allJobRoute.post('/many', postAllJob)

// Post a Job
allJobRoute.post('/', postOneJob)

// Get all Jobs Post
allJobRoute.get('/', getAllJob)

// Get all Jobs Post
allJobRoute.get('/:id', getAJob)


// Delete A Job Post
allJobRoute.delete('/:id', deleteAJobPost)


module.exports = allJobRoute;