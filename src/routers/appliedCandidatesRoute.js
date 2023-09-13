const express = require('express')
const { postAllAppliedInfo, postOneAppliedInfo, getAppliedCandidateByCompany, getAllAppliedCandidateInfo, getAllAppliedCandidates, getAppliedJobEachCandidate, cancelApplicationEachCandidate, storeAppliedInfo, AppliedCandidateInfo, getAppliedCandidates } = require('../controllers/AppliedCandidatesController')
const appliedCandidateRoute = express.Router()

// Post Candidate Data 
appliedCandidateRoute.post('/many', postAllAppliedInfo)

// Apply Candidate Information Store  (complete) 
appliedCandidateRoute.post('/', storeAppliedInfo)

// Get All Applied candidate 
appliedCandidateRoute.get('/', getAllAppliedCandidates)

// Get All Applied candidate 
appliedCandidateRoute.get('/id/:id', getAppliedCandidates)

// Get All Applied Job For Each Candidate (Candidate Dashboard)
appliedCandidateRoute.get('/eachCandidate/:email', getAppliedJobEachCandidate)//

// Cancellation of Application  For Each Candidate (Candidate Dashboard)
appliedCandidateRoute.delete('/cancelApplication/:appliedJobId', cancelApplicationEachCandidate)

// Get Applied candidate Information by id (Recruiter Dashboard)
appliedCandidateRoute.get('/:id', AppliedCandidateInfo)

// Get candidate by Company Mail complete (Recruiter Dashboard)
appliedCandidateRoute.get('/email/:recruiterEmail', getAppliedCandidateByCompany)



module.exports = appliedCandidateRoute;