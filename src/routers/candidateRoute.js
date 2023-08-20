const express = require('express')
const { allJobCandidate } = require('../collections/collection');
const { ObjectId } = require('bson');
const candidate = express.Router()

// Get All candidate 
candidate.get('/', async (req, res) => {
    try {
        const allJobCandidates = await allJobCandidate.find();
        res.status(200).send(allJobCandidates)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
})

// Get candidate by id
candidate.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const jobCandidate = await allJobCandidate.find(query);
        console.log(jobCandidate)
        res.status(200).send(jobCandidate)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
})

// Post Candidate Data 
candidate.post('/', async (req, res) => {
    try {
        const allCandidates = req.body;
        console.log('allCandidates', allCandidates)
        const result = await allJobCandidate.insertMany(allCandidates);
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
// candidate.post('/ ,')

module.exports = candidate;