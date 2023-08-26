const { ObjectId } = require('bson');
const { appliedCandidatesCollection, allJobCollection, allCandidatesCollection } = require('../collections/collection');


// Post a applied Candidate (todo: only developer)
const postAllAppliedInfo = async (req, res) => {
    try {
        const newApplicantData = req.body;
        const newApplicant = await appliedCandidatesCollection.insertMany(newApplicantData);
        res.status(200).send(newApplicant)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// Post applied Candidate - 
const postOneAppliedInfo = async (req, res) => {
    try {
        const newApplicantData = req.body;
        const newApplicant = await appliedCandidatesCollection(newApplicantData).save();
        res.status(200).send(newApplicant)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
// Get All Applied Candidate Developer route 
const getAllAppliedCandidates = async (req, res) => {
    try {
        const Result = await appliedCandidatesCollection.find();
        res.status(200).send(Result);
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// Get all applied Info -for Candidate
const getAllAppliedCandidateInfo = async (req, res) => {
    try {
        const applicantId = req.params.id;
        const query = { _id: new ObjectId(applicantId) }
        const allApplicant = await allCandidatesCollection.find(query);
        res.status(200).send(allApplicant);
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// Get All Applied Job For Each Candidate 
const getAppliedJobEachCandidate = async (req, res) => {
    try {
        const applicantId = req.params.applicantId;
        const query = { applicantId: applicantId };
        const Result = await appliedCandidatesCollection.find(query);
        res.status(200).send(Result);
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// Cancellation of Application  For Each Candidate
const cancelApplicationEachCandidate = async (req, res) => {
    try {
        const appliedJobId = req.params.appliedJobId;
        const query = { appliedJobId: appliedJobId };
        const Result = await appliedCandidatesCollection.findOneAndDelete(query);
        res.status(200).send(Result);
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
// Get a applied Candidate
const getAppliedJobInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const Result = await appliedCandidatesCollection.find(query);
        res.status(200).send(Result);
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// Get a Specific Company's applied Candidate  for recruiters
const getAppliedCandidateByCompany = async (req, res) => {
    try {
        const company = req.params.company;
        const query = { companyName: company };
        const Result = await appliedCandidatesCollection.find(query);
        res.status(200).send(Result);
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
// Get a Specific Company's applied Candidate  for recruiters
const getAppliedCandidatesDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const Result = await allCandidatesCollection.find(query);
        res.status(200).send(Result);
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// Delete A applied Candidate
const deleteOneAppliedInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const deleteJobAppliedCandidate = await appliedCandidatesCollection.findOneAndDelete(query)
        res.status(200).send(deleteJobAppliedCandidate)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}



module.exports = { postAllAppliedInfo, getAllAppliedCandidates,getAppliedJobEachCandidate,cancelApplicationEachCandidate, getAllAppliedCandidateInfo, postOneAppliedInfo, getAppliedJobInfo, getAppliedCandidateByCompany, getAppliedCandidatesDetails, deleteOneAppliedInfo };
