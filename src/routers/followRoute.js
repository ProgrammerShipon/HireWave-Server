const { getAllFollow, recruiterFollow, candidateFollow, postFollow, deleteFollow, candidateFollows } = require("../controllers/followController");


const followRoute = require("express").Router();

// favorite all data
followRoute.get("/", getAllFollow);

// favorite data store
followRoute.get("/recruiter_email/:email", recruiterFollow);

// favorite data store
followRoute.get("/candidate_email/:email", candidateFollow);

// favorite data store
followRoute.get("/candidates_email/:email", candidateFollows);

// favorite data store
followRoute.post("/", postFollow);

// favorite delete -> need recruiterEmail + 
followRoute.delete("/:id", deleteFollow);

// route export
module.exports = followRoute
