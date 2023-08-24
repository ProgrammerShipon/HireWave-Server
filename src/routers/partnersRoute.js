const express = require('express');
const { getAllPartnersData, getPartner, postPartnersData, deletePartners, postOnePartnersData } = require('../controllers/partnersController');
const partnersRoute = express.Router();


// Get All partners 
partnersRoute.get('/', getAllPartnersData)

// Get partners by id
partnersRoute.get('/:id', getPartner)

// Post partners Data 
partnersRoute.post('/', postPartnersData)
partnersRoute.post('/one', postOnePartnersData)

// Delete partners Data
partnersRoute.delete('/:id', deletePartners)

module.exports = partnersRoute;