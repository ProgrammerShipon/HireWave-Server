const { recruitersCollection } = require("../collections/collection")
const { ObjectId } = require('bson');

const getAllRecruiters = async (req, res) => {
    try {
        const recruiters = await recruitersCollection.find()
        res.status(200).send(recruiters)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
const getRecruiter = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const recruiter = await recruitersCollection.find(query)
        res.status(200).send(recruiter)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
const postNewRecruiter = async (req, res) => {
    try {
        const newRecruiterData = req.body;
        const newRecruiter = await recruitersCollection.insertMany(newRecruiterData);
        res.status(200).send(newRecruiter)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
const deleteRecruiter = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const deleteRecruiter = await recruitersCollection.deleteOne(query)
        res.status(200).send(deleteRecruiter)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
module.exports = { getAllRecruiters, getRecruiter, postNewRecruiter, deleteRecruiter }