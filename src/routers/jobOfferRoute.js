const {
  getAllJobOffer,
  postJobOffer,
  findByCandidateEmail,
} = require("../controllers/jobOfferController");

const jobOfferRoute = require("express").Router();

// Get All task
jobOfferRoute.get("/", getAllJobOffer);

// Get task by id
// jobOfferRoute.get('/:id', getACandidate)

// Job Offer Notification by candidate
jobOfferRoute.get("/candidate-email/:email", findByCandidateEmail);

// Post task Data
jobOfferRoute.post("/", postJobOffer);

// Delete task Data
// jobOfferRoute.delete('/:id', deleteCandidate)

// Delete task Data
// jobOfferRoute.patch('/:id', updateCandidate)

// Module or file exports
module.exports = jobOfferRoute;
