const tasksRoute = require("express").Router();

const { tasksPost, allTaskGet } = require("../controllers/tasksController");


// Get All task 
tasksRoute.get("/", allTaskGet);

// Get task by id
// tasksRoute.get('/:id', getACandidate)

// Job Offer Notification or others by candidate
jobOfferRoute.get("/candidate-email/:email", findByCandidateEmail);

// Post task Data 
tasksRoute.post("/", tasksPost);

// Delete task Data
// tasksRoute.delete('/:id', deleteCandidate)

// Delete task Data
// tasksRoute.patch('/:id', updateCandidate)




// Module or file exports
module.exports = tasksRoute