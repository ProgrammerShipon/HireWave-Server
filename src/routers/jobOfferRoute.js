const {
  getAllJobOffer,
  postJobOffer,
} = require("../controllers/jobOfferController");

const jobOfferRoute = require("express").Router();

// Get All task
jobOfferRoute.get("/", getAllJobOffer);

// Get task by id
// jobOfferRoute.get('/:id', getACandidate)

// Get task by id
// jobOfferRoute.get('/email/:email', getCandidateByGmail)

// Post task Data
jobOfferRoute.post("/", postJobOffer);

// Delete task Data
// jobOfferRoute.delete('/:id', deleteCandidate)

// Delete task Data
// jobOfferRoute.patch('/:id', updateCandidate)

// Module or file exports
module.exports = jobOfferRoute;
