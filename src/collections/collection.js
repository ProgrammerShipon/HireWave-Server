const { default: mongoose } = require("mongoose");

// All Model or schema require
const allJobModel = require("../models/allJobModel");
const faqsModel = require("../models/faqsModel");
const reviewModel = require("../models/reviewModel");
const learningModel = require("../models/learningModel");

// all jobs collection database
const allJobCollection = new mongoose.model("All-Job", allJobModel);

// FAQS Collection database
const faqsCollection = new mongoose.model("FAQs", faqsModel);

// Review Collection database
const reviewCollection = new mongoose.model("Reviews", reviewModel);

// Learning Collection database
const learningCollection = new mongoose.model("Learning", learningModel);

const allCandidatesCollection = new mongoose.model("candidates", learningModel);

// export data base
module.exports = {
  allJobCollection,
  faqsCollection,
  reviewCollection,
  learningCollection,
  allCandidatesCollection,
};
