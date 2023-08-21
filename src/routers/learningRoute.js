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
learningRoute.post("/insert", insertLearning);

// Learning get api
learningRoute.get("/", getLearning);

// Learning updated api
learningRoute.get("/update/:id", learningUpdate);

// Learning updated api
learningRoute.get("/update/:id", postLearning);

// export module
module.exports = learningRoute;
