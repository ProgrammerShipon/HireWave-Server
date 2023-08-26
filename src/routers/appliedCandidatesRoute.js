const express = require('express')
const { postAllAppliedInfo, postOneAppliedInfo, getAppliedCandidateByCompany, getAllAppliedCandidateInfo, getAllAppliedCandidates, getAppliedJobEachCandidate, cancelApplicationEachCandidate } = require('../controllers/AppliedCandidatesController')
const appliedCandidateRoute = express.Router()


// Post Candidate Data 
appliedCandidateRoute.post('/many', postAllAppliedInfo)

// Post Candidate Data complete
appliedCandidateRoute.post('/', postOneAppliedInfo)

// Get All candidate 
appliedCandidateRoute.get('/', getAllAppliedCandidates)

// Get All Applied Job For Each Candidate (Candidate Dashboard)
appliedCandidateRoute.get('/eachCandidate/:applicantId', getAppliedJobEachCandidate)

// Cancellation of Application  For Each Candidate (Candidate Dashboard)
appliedCandidateRoute.delete('/cancelApplication/:appliedJobId', cancelApplicationEachCandidate)

// Get Applied candidate Information by id (Recruiter Dashboard)
appliedCandidateRoute.get('/candidateInfo/:id', getAllAppliedCandidateInfo)

// Get candidate by Company Mail complete (Recruiter Dashboard)
appliedCandidateRoute.get('/company/:company', getAppliedCandidateByCompany)


// Delete Candidate Data
// appliedCandidateRoute.delete('/:id', deleteCandidate)

module.exports = appliedCandidateRoute;