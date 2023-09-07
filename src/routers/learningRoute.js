const express = require("express");
const { insertLearning, getLearning, singleLearning, updateLearning, deleteLearning } = require("../controllers/learningController");
const learningRoute = express.Router();

// Learning insert data
learningRoute.post("/", insertLearning);

// Learning get all Data
learningRoute.get("/", getLearning);

// Learning Single Data
learningRoute.get("/:id", singleLearning);

// Learning updated api
learningRoute.patch("/:id", updateLearning);

// Learning updated api
learningRoute.delete("/:id", deleteLearning);

// export module
module.exports = learningRoute;
