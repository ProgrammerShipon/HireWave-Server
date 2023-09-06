const express = require("express");
const learningRoute = express.Router();

// Require Control Function
const {
  getLearning,
  insertLearning,
  learningUpdate,
  updateLearning,
  deleteLearning,
} = require("../controllers/learningController");

// Learning insert data
learningRoute.post("/", insertLearning);

// Learning get all Data
learningRoute.get("/", getLearning);

// Learning Single Data
learningRoute.get("/:id", learningUpdate);

// Learning updated api
learningRoute.patch("/:id", updateLearning);

// Learning updated api
learningRoute.delete("/:id", deleteLearning);

// export module
module.exports = learningRoute;
