const tasksRoute = require("express").Router();

const { tasksPost, allTaskGet } = require("../controllers/tasksController");


// Get All task 
tasksRoute.get("/", allTaskGet);

// Get task by id
// tasksRoute.get('/:id', getACandidate)

// Get task by id
// tasksRoute.get('/email/:email', getCandidateByGmail)

// Post task Data 
tasksRoute.post("/", tasksPost);

// Delete task Data
// tasksRoute.delete('/:id', deleteCandidate)

// Delete task Data
// tasksRoute.patch('/:id', updateCandidate)




// Module or file exports
module.exports = tasksRoute