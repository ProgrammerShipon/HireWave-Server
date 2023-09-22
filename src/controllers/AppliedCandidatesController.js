const { ObjectId } = require('bson');
const { appliedCandidatesCollection, allCandidatesCollection } = require('../collections/collection');


// Post a applied Candidate (todo: only developer)
const postAllAppliedInfo = async (req, res) => {
    try {
        const newApplicantData = req.body;
        const newApplicant = await appliedCandidatesCollection.insertMany(newApplicantData);
        res.status(200).send(newApplicant)
    } catch (error) {
      console.log("postAllAppliedInfo -> ", error);
      res.status(404).send({ message: "Server Broken" });
    }
}

// store applied info
const storeAppliedInfo = async (req, res) => {
    try {
        const appliedJob = req.body;
        const result = await appliedCandidatesCollection(appliedJob).save()
        res.status(200).send(result)
    } catch (error) {
      console.log("storeAppliedInfo -> ", error);
      res.status(404).send({ message: "Server Broken" });
    }
}

// Get All Applied Candidate Developer route 
const getAllAppliedCandidates = async (req, res) => {
    try {
        const Result = await appliedCandidatesCollection.find();
        res.status(200).send(Result);
    } catch (error) {
      console.log("getAllAppliedCandidates -> ", error);
      res.status(404).send({ message: "Server Broken"});
    }
}

// Get All Applied Candidate Developer route 
const getAppliedCandidates = async (req, res) => {
    try {
        const id = req.params.id
        const Result = await appliedCandidatesCollection.findById(id);
        res.status(200).send(Result);
    } catch (error) {
      console.log("deleteAJobPost -> ", error);
      res.status(404).send({ message: "Server Broken" });
    }
}

// Get all applied Info -for Candidate
const AppliedCandidateInfo = async (req, res) => {
    try {
        const candidateInfo = await allCandidatesCollection.findById(req.params.id);
        res.status(200).send(candidateInfo);
    } catch (error) {
      console.log("deleteAJobPost -> ", error);
      res.status(404).send({ message: "Server Broken" });
    }
}

// Get All Applied Job For Each Candidate 
const getAppliedJobEachCandidate = async (req, res) => {
    try {
        const applicantEmail = req.params.email;
        const query = { applicantEmail: applicantEmail };
        const Result = await appliedCandidatesCollection.find(query);
        res.status(200).send(Result);
    } catch (error) {
      console.log("getAppliedJobEachCandidate -> ", error);
      res.status(404).send({ message: "Server Broken" });
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
      console.log("cancelApplicationEachCandidate -> ", error);
      res.status(404).send({ message: "Server Broken" });
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
      console.log("getAppliedJobInfo -> ", error);
      res.status(404).send({ message: "Server Broken" });
    }
}

// Get a Specific Company's applied Candidate  for recruiters
const getAppliedCandidateByCompany = async (req, res) => {
    try {
        const recruiterEmail = req.params.recruiterEmail;
        const query = { companyEmail: recruiterEmail };
        const Result = await appliedCandidatesCollection.find(query);
        res.status(200).send(Result);
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
// Get a Specific Company's applied Candidate  for recruiters
const getAppliedCandidatesDetails = async (req, res) => {
    try {
        const Result = await allCandidatesCollection.find();
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



module.exports = { postAllAppliedInfo, getAllAppliedCandidates, getAppliedJobEachCandidate, cancelApplicationEachCandidate, AppliedCandidateInfo, storeAppliedInfo, getAppliedJobInfo, getAppliedCandidateByCompany, getAppliedCandidatesDetails,getAppliedCandidates, deleteOneAppliedInfo };
