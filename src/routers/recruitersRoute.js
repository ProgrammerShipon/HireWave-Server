const express = require('express')
const { getAllRecruiters, postNewRecruiter, getRecruiter, deleteRecruiter, postNewRecruiters } = require('../controllers/recruitersController')
const recruiterRoute = express.Router()

// Post One Recruiters Details
recruiterRoute.post('/', postNewRecruiter)

// Post Many Recruiters Details
recruiterRoute.post('/many', postNewRecruiters)

// Get All Recruiters Details
recruiterRoute.get('/', getAllRecruiters)

// Post One Recruiters Details
recruiterRoute.get('/:id', getRecruiter)

// Delete One Recruiters Details
recruiterRoute.delete('/:id', deleteRecruiter)


module.exports = recruiterRoute;