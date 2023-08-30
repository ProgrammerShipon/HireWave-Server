const express = require('express');
const { getAllPartnersData, getPartner, postPartnersData, deletePartners, postOnePartnersData } = require('../controllers/partnersController');
const partnersRoute = express.Router();


// Post partners Data 
partnersRoute.post('/many', postPartnersData)

// Post One partners Data 
partnersRoute.post('/', postOnePartnersData)

// Get All partners 
partnersRoute.get('/', getAllPartnersData)

// Get partners by id
partnersRoute.get('/:id', getPartner)

// Delete partners Data
partnersRoute.delete('/:id', deletePartners)

module.exports = partnersRoute;