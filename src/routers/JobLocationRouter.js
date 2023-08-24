const express = require('express')
const jobLocationRoute = express.Router()
const { getAllJobLocation, postJobLocation, deleteJobLocationPost, postManyJobLocation, getAJobLocation } = require('../controllers/jobLocationController');


// Post Many job Location post at a time 
jobLocationRoute.post('/many', postManyJobLocation)

// Post A specific job Location post
jobLocationRoute.post('/', postJobLocation)

// Get All job Location post
jobLocationRoute.get('/', getAllJobLocation)

// Get A specific job Location post
jobLocationRoute.get('/:id', getAJobLocation)

// Delete A specific job Location  post
jobLocationRoute.delete('/:id', deleteJobLocationPost)

module.exports = jobLocationRoute; 