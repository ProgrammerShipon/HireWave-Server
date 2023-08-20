const express = require('express')
const jobLocationRoute = express.Router()
const { getAllJobLocation, postJobLocation, deleteJobLocationPost } = require('../controllers/jobLocationcontroller');



jobLocationRoute.get('/', getAllJobLocation)

jobLocationRoute.post('/', postJobLocation)

// jobLocationRoute.put('/', postJobLocation)

jobLocationRoute.delete('/:id', deleteJobLocationPost)

module.exports = jobLocationRoute; 