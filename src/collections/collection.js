const { default: mongoose } = require("mongoose");

// all schema model require
const userSchema = require("../models/userModel");
const allJobModel = require("../models/allJobModel");
const faqsModel = require("../models/faqsModel");
const reviewModel = require("../models/reviewModel");
const learningModel = require("../models/learningModel");
const candidateDataModel = require("../models/candidateDataModel");
const partnersDataModel = require("../models/partnersDataModel");
const allCategoryDataModel = require("../models/allCategoryDataModel");
const jobLocationDataModel = require("../models/jobLocationDataModel");
const recruitersDataModel = require("../models/recruitersDataModel");
const appliedCandidatesDataModel = require("../models/appliedCandidatesDataModel");
const userDataModel = require("../models/userDataModel");
const savedJobDataModel = require("../models/savedJobDataModel");
const paymentDataModel = require("../models/paymentModel");
const tasksModel = require("../models/tasksModel");
const jobOfferModel = require("../models/jobOfferModel");

// User Collection
const usersCollection = new mongoose.model("users", userDataModel);

// all jobs collection database
const allJobCollection = new mongoose.model("allJobs", allJobModel);

// FAQS Collection database
const faqsCollection = new mongoose.model("faqs", faqsModel
);

// Review Collection database
const reviewCollection = new mongoose.model("reviews", reviewModel);

// Learning Collection database
const learningCollection = new mongoose.model("learning", learningModel);

// Candidates Collection database
const allCandidatesCollection = new mongoose.model("candidates", candidateDataModel);

// Partners Collection database
const partnersCollection = new mongoose.model("partners", partnersDataModel);

// All Category Collection database
const AllCategoryCollection = new mongoose.model("category", allCategoryDataModel);

// Job Location Collection database
const jobsLocationCollection = new mongoose.model("jobLocation", jobLocationDataModel);

// Job Location Collection database
const recruitersCollection = new mongoose.model("recruiters", recruitersDataModel);

// applied Candidates Collection database
const appliedCandidatesCollection = new mongoose.model(
  "appliedJobs",
  appliedCandidatesDataModel
);

// Saved Job Collection
const savedJobCollection = new mongoose.model("savedjob", savedJobDataModel);

// Saved Job Collection
const paymentCollection = new mongoose.model("payment", paymentDataModel);

// Job task Collection
const tasks = new mongoose.model("tasks", tasksModel);

// Job Offer Collection
const jobOffer = new mongoose.model("jobOffer", jobOfferModel);

// export data base
module.exports = {
  usersCollection,
  paymentCollection,
  allJobCollection,
  faqsCollection,
  reviewCollection,
  learningCollection,
  allCandidatesCollection,
  partnersCollection,
  AllCategoryCollection,
  jobsLocationCollection,
  recruitersCollection,
  appliedCandidatesCollection,
  savedJobCollection,
  tasks,
  jobOffer,
};
