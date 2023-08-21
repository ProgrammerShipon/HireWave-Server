const express = require('express')
const { ObjectId } = require('bson');
const { getAllCandidatesData, getACandidate, postCandidateData, deleteCandidate } = require('../controllers/candidateDataController');
const candidateRoute = express.Router()

// Get All candidate 
candidateRoute.get('/', getAllCandidatesData)

// Get candidate by id
candidateRoute.get('/:id', getACandidate)

// Post Candidate Data 
candidateRoute.post('/', postCandidateData)
// Delete Candidate Data
candidateRoute.delete('/:id', deleteCandidate)

module.exports = candidateRoute;