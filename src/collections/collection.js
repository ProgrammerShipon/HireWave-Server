const { default: mongoose } = require("mongoose");

// All Model or schema require
const allJobModel = require("../models/allJobModel");
const faqsModel = require("../models/faqsModel");
const reviewModel = require("../models/reviewModel");
const learningModel = require("../models/learningModel");
const partnersDataModel = require("../models/partnersDataModel");
const allCategoryDataModel = require("../models/allCategoryDataModel");
const jobLocationDataModel = require("../models/jobLocationDataModel");
const recruitersDataModel = require("../models/recruitersDataModel");
const appliedCandidatesDataModel = require("../models/appliedCandidatesDataModel");

// all jobs collection database
const allJobCollection = new mongoose.model("allJobs", allJobModel);

// FAQS Collection database
const faqsCollection = new mongoose.model("faqs", faqsModel);

// Review Collection database
const reviewCollection = new mongoose.model("reviews", reviewModel);

// Learning Collection database
const learningCollection = new mongoose.model("learning", learningModel);

// Candidates Collection database
const allCandidatesCollection = new mongoose.model("candidates", learningModel);

// Partners Collection database
const partnersCollection = new mongoose.model("partners", partnersDataModel);

// All Category Collection database
const AllCategoryCollection = new mongoose.model("category", allCategoryDataModel);

// Job Location Collection database
const jobsLocationCollection = new mongoose.model("jobLocation", jobLocationDataModel);

// Job Location Collection database
const recruitersCollection = new mongoose.model("recruiters", recruitersDataModel);

// applied Candidates Collection database
const appliedCandidatesCollection = new mongoose.model("appliedCandidates", appliedCandidatesDataModel);



// export data base
module.exports = {
  allJobCollection,
  faqsCollection,
  reviewCollection,
  learningCollection,
  allCandidatesCollection,
  partnersCollection,
  AllCategoryCollection,
  jobsLocationCollection,
  recruitersCollection,
  appliedCandidatesCollection
};
