const express = require("express");
const learningRoute = express.Router();

// Require Control Function
const {
  getLearning,
  insertLearning,
  learningUpdate,
  postLearning,
} = require("../controllers/learningController");

// Learning insert data
learningRoute.post("/", insertLearning);

// Learning get all Data
learningRoute.get("/", getLearning);

// Learning Single Data
learningRoute.get("/:id", learningUpdate);

// Learning updated api
learningRoute.put("/:id", postLearning);

// export module
module.exports = learningRoute;
