const { jobsLocationCollection } = require("../collections/collection")
const { ObjectId } = require('bson');


// POST A JOBS LOCATION DETAILS 
const postJobLocation = async (req, res) => {
    try {
        const newJobLocation = req.body;
        // console.log(newJobLocation)
        const newJobLocationPost = await new jobsLocationCollection(newJobLocation).save();
        res.status(200).send(newJobLocationPost)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// POST A JOBS LOCATION DETAILS 
const postManyJobLocation = async (req, res) => {
    try {
        const newJobLocation = req.body;
        const newJobLocationPost = await jobsLocationCollection.insertMany(newJobLocation);
        res.status(200).send(newJobLocationPost)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// GET ALL JOBS LOCATION DETAILS 
const getAllJobLocation = async (req, res) => {
    try {
        const getAllPost = await jobsLocationCollection.find();
        res.status(200).send(getAllPost)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// GET A JOB LOCATION DETAILS BY :ID
const getAJobLocation = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const jobLocation = await jobsLocationCollection.find(query);
        res.status(200).send(jobLocation)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

// Delete A JOB LOCATION DETAILS BY :ID
const deleteJobLocationPost = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const currentJobLocationPost = await jobsLocationCollection.findOneAndDelete(query);
        res.status(200).send(currentJobLocationPost)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

module.exports = { getAllJobLocation, getAJobLocation, postJobLocation, deleteJobLocationPost, postManyJobLocation }