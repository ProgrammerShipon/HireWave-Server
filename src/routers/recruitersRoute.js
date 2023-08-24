const express = require('express')
const { getAllRecruiters, postNewRecruiter, getRecruiter, deleteRecruiter, postNewRecruiters } = require('../controllers/recruitersController')
const recruiterRoute = express.Router()


// Post Many Recruiters Details
recruiterRoute.post('/many', postNewRecruiters)

// Post One Recruiters Details
recruiterRoute.post('/', postNewRecruiter)

// Get All Recruiters Details
recruiterRoute.get('/', getAllRecruiters)

// Post One Recruiters Details
recruiterRoute.get('/:id', getRecruiter)

// Delete One Recruiters Details
recruiterRoute.delete('/:id', deleteRecruiter)


module.exports = recruiterRoute;