const express = require('express')
const { getAllCandidatesData, getACandidate, postCandidateData, deleteCandidate, updateCandidateAvailability, getCandidateByGmail, updateCandidateLocation, updateCandidateSkills, updateCandidateLanguageSkills, updateCandidateEducationalQualification, updateCandidateExperience, updateCandidateAbout, updateCandidateProfile, updateCandidateProfilePhoto } = require('../controllers/candidateDataController');
const candidateRoute = express.Router()

// Get All candidate 
candidateRoute.get('/', getAllCandidatesData)

// Get candidate by id
candidateRoute.get('/:id', getACandidate)

// Get candidate by id
candidateRoute.get('/email/:email', getCandidateByGmail)

// Post Candidate Data 
candidateRoute.post('/', postCandidateData)

// Delete Candidate Data
candidateRoute.delete('/:id', deleteCandidate)

// Update Candidate Data
candidateRoute.patch('/profilePhoto/:id', updateCandidateProfilePhoto)

// Update Candidate Data
candidateRoute.patch('/profile/:id', updateCandidateProfile)

// Update Candidate Data
candidateRoute.patch('/availability/:id', updateCandidateAvailability)

// Update Candidate Data
candidateRoute.patch('/about/:id', updateCandidateAbout)

// Update Candidate Location
candidateRoute.patch('/location/:id', updateCandidateLocation)

// Update Candidate Location
candidateRoute.patch('/skill/:id', updateCandidateSkills)

// Update Candidate Language Skills
candidateRoute.patch('/language/:id', updateCandidateLanguageSkills)

// Update Candidate Educational Qualification
candidateRoute.patch('/education/:id', updateCandidateEducationalQualification)

// Update Candidate Experience
candidateRoute.patch('/experience/:id', updateCandidateExperience)

module.exports = candidateRoute;