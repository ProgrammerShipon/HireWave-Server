const { ObjectId } = require('bson');
const { allCandidatesCollection } = require('../collections/collection');

const getAllCandidatesData = async (req, res) => {
    try {
        const allCandidates = await allCandidatesCollection.find();
        res.status(200).send(allCandidates)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
const getACandidate = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const jobCandidate = await allCandidatesCollection.find(query);
        // console.log(jobCandidate)
        res.status(200).send(jobCandidate)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
const postCandidateData = async (req, res) => {
    try {
        const allCandidates = req.body;
        console.log('allCandidates', allCandidates)
        const result = await allCandidatesCollection.insertMany(allCandidates);
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
const deleteCandidate = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const jobCandidate = await allCandidatesCollection.DeleteOne(query);
        console.log(jobCandidate)
        res.status(200).send(jobCandidate)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
module.exports = { getAllCandidatesData, getACandidate, postCandidateData, deleteCandidate }