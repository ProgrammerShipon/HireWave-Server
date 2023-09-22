const express = require("express");
const {
  insertLearning,
  getLearning,
  singleLearning,
  updateLearning,
  deleteLearning,
  updateLearningLike,
  updateLearningDisLike,
  updateLearningView,
  updateInteractions,
} = require("../controllers/learningController");
const learningRoute = express.Router();

// Learning insert data
learningRoute.post("/", insertLearning);

// Learning get all Data
learningRoute.get("/", getLearning);

// Learning Single Data
learningRoute.get("/:id", singleLearning);

// Learning updated api 
learningRoute.patch("/like/:id", updateLearningLike);

// Learning updated api 
learningRoute.patch("/dislike/:id", updateLearningDisLike);

// Learning updated api 
learningRoute.patch("/view/:id", updateLearningView);

// Learning updated api 
learningRoute.patch("/interactions/:id", updateInteractions);

// Learning updated api
learningRoute.delete("/:id", deleteLearning);

// export module
module.exports = learningRoute;
