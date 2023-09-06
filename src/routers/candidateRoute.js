const express = require('express')
const { getAllCandidatesData, getACandidate, postCandidateData, deleteCandidate, updateCandidate } = require('../controllers/candidateDataController');
const candidateRoute = express.Router()

// Get All candidate 
candidateRoute.get('/', getAllCandidatesData)

// Get candidate by id
candidateRoute.get('/:id', getACandidate)

// Post Candidate Data 
candidateRoute.post('/', postCandidateData)

// Delete Candidate Data
candidateRoute.delete('/:id', deleteCandidate)

// Delete Candidate Data
candidateRoute.patch('/:id', updateCandidate)

module.exports = candidateRoute;