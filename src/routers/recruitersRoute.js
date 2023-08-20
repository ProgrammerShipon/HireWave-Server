const express = require('express')
const { getAllRecruiters, postNewRecruiter, getRecruiter, deleteRecruiter } = require('../controllers/recruitersController')
const recruiterRoute = express.Router()

recruiterRoute.get('/', getAllRecruiters)
recruiterRoute.get('/:id', getRecruiter)
recruiterRoute.post('/', postNewRecruiter)
recruiterRoute.delete('/:id', deleteRecruiter)


module.exports = recruiterRoute;