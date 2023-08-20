const express = require('express')

const { getAllJob, postAllJob, getAJob, deleteAJobPost } = require('../controllers/allJobController')
const allJobRoute = express.Router()

// Post a Job
allJobRoute.post('/', postAllJob)

// Get all Jobs Post
allJobRoute.get('/', getAllJob)

// Get a  Jobs Post
allJobRoute.get('/:id', getAJob)

// Delete A Job Post
allJobRoute.delete('/:id', deleteAJobPost)


module.exports = allJobRoute;