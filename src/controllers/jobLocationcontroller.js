const { jobLocationCollection } = require("../collections/collection")
const { ObjectId } = require('bson');


// GET ALL JOBS LOCATION DETAILS 
const getAllJobLocation = async (req, res) => {
    try {
        const allJobLocationPost = await jobLocationCollection.find();
        res.status(204).send(allJobLocationPost)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
// GET A JOB LOCATION DETAILS BY :ID
const getAJobLocation = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const jobLocation = await jobLocationCollection.find(query);
        // console.log(jobLocation)
        res.status(200).send(jobLocation)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
// POST A JOBS LOCATION DETAILS 
const postJobLocation = async (req, res) => {
    try {
        // const newJobLocation = ({
        //     name: req.body.name,
        //     images: req.body.images,
        //     status: req.body.status,
        //     vacancy: req.body.vacancy,
        //     companies: req.body.companies
        // })
        const newJobLocation = req.body;
        // console.log(newJobLocation)
        const newJobLocationPost = await jobLocationCollection.insertMany(newJobLocation);
        res.status(200).send(newJobLocationPost)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

const deleteJobLocationPost = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const query={_id : new ObjectId(id)}
        // console.log('findSelectedPost', query)
        const currentJobLocationPost = await jobLocationCollection.deleteOne(query);
        res.status(200).send(currentJobLocationPost)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}


module.exports = { getAllJobLocation, postJobLocation ,deleteJobLocationPost}