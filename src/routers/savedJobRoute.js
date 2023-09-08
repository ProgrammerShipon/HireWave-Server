const express = require("express");
const { insertSaveJob, getAllSaveJob, getSaveJobByUser, saveJob, deleteSaveJob } = require("../controllers/savedJobController");

const savedJobRoute = express.Router();

// Learning insert data
savedJobRoute.post("/", insertSaveJob);


// get all data
savedJobRoute.get("/", getAllSaveJob);

// get all data
savedJobRoute.get("/:email", getSaveJobByUser);

// saveJob Single Data
savedJobRoute.get("/", saveJob);

// delete saveJob 
savedJobRoute.delete("/:id", deleteSaveJob);

// export module
module.exports = savedJobRoute;