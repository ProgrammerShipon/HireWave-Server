const express = require('express')

const { getAllJob, postAllJob, getAJob,deleteAJobPost, updateJobs, postOneJob, getEmail } = require('../controllers/allJobController')
const allJobRoute = express.Router()

// Post a Job
allJobRoute.post('/many', postAllJob)

// Post a Job
allJobRoute.post('/', postOneJob)

// Get all Jobs Post
allJobRoute.get('/', getAllJob)

// Get all Jobs Post
allJobRoute.get('/:id', getAJob)

// Get all Jobs Post
allJobRoute.get('/:email', getEmail)

// Delete A Job Post
allJobRoute.patch('/:id', updateJobs)

// Delete A Job Post
allJobRoute.delete("/:id", deleteAJobPost);


module.exports = allJobRoute;