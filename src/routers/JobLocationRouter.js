const express = require('express')
const { jobLocationCollection } = require('../collections/collection');
const jobLocation = express.Router()


jobLocation.get('/', async (req, res) => {
    try {
        const allJobLocationPost = await jobLocationCollection.find();
        res.status(200).send(allJobLocationPost)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
})

jobLocation.post('/', async (req, res) => {
    try {
        // const newJobLocation = ({
        //     name: req.body.name,
        //     images: req.body.images,
        //     status: req.body.status,
        //     vacancy: req.body.vacancy,
        //     companies: req.body.companies
        // })
        const newJobLocation=req.body;
        console.log(newJobLocation)
        const newJobLocationPost = await jobLocationCollection.insertMany(newJobLocation);
        res.status(200).send(newJobLocationPost)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
})

module.exports = jobLocation ;