const express = require('express')
const {
  getAllRecruiters,
  postNewRecruiter,
  getRecruiter,
  deleteRecruiter,
  postNewRecruiters,
  updateData,
} = require("../controllers/recruitersController");

const recruiterRoute = express.Router()

// Post Many Recruiters Details
recruiterRoute.post('/many', postNewRecruiters)

// Post One Recruiters Data
recruiterRoute.post('/', postNewRecruiter)

// Get All Recruiters Data
recruiterRoute.get('/', getAllRecruiters)

// Single Recruiters Details
recruiterRoute.get('/:id', getRecruiter)

// Update Recruiters Details
recruiterRoute.patch('/:id', updateData)

// Delete One Recruiters Details
recruiterRoute.delete('/:id', deleteRecruiter)


module.exports = recruiterRoute;