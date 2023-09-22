const tasksRoute = require("express").Router();

const { tasksPost, allTaskGet, findByCandidateEmail, findByRecruiterEmail } = require("../controllers/tasksController");


// Get All task 
tasksRoute.get("/", allTaskGet);

// Get task by id
// tasksRoute.get('/:id', getACandidate)

// Job Offer Notification or others by candidate
tasksRoute.get("/candidate-email/:email", findByCandidateEmail);

// Job Offer Notification or others by candidate
tasksRoute.get("/recruiter-email/:email", findByRecruiterEmail);

// Post task Data 
tasksRoute.post("/", tasksPost);



// Module or file exports
module.exports = tasksRoute