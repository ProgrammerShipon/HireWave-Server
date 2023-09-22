const {
  getAllJobOffer,
  postJobOffer,
  findByCandidateEmail,
  updateJobOfferStatus,
  findByRecruiterEmail,
} = require("../controllers/jobOfferController");

const jobOfferRoute = require("express").Router();

// Get All task
jobOfferRoute.get("/", getAllJobOffer);

// Get task by id
// jobOfferRoute.get('/:id', getACandidate)

// Job Offer Notification by candidate
jobOfferRoute.get("/candidate-email/:email", findByCandidateEmail);

// Job Offer Notification by recruiter
jobOfferRoute.get("/recruiter-email/:email", findByRecruiterEmail);

// Post task Data
jobOfferRoute.post("/", postJobOffer);

// Delete task Data
// jobOfferRoute.delete('/:id', deleteCandidate)

// update task Data
jobOfferRoute.patch("/candidate-status/:id", updateJobOfferStatus);

// Module or file exports
module.exports = jobOfferRoute;
