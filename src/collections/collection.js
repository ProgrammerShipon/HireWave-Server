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
const chatDataModel = require("../models/chatDataModel");
const messageModel = require("../models/messageModel");

// User Collection
const usersCollection = new mongoose.model("users", userSchema);

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
const allCandidatesCollection = new mongoose.model(
  "candidates",
  candidateDataModel
);

// Partners Collection database
const partnersCollection = new mongoose.model("partners", partnersDataModel);

// All Category Collection database
const AllCategoryCollection = new mongoose.model(
  "category",
  allCategoryDataModel
);

// Job Location Collection database
const jobsLocationCollection = new mongoose.model(
  "jobLocation",
  jobLocationDataModel
);

// Job Location Collection database
const recruitersCollection = new mongoose.model(
  "recruiters",
  recruitersDataModel
);

// applied Candidates Collection database
const appliedCandidatesCollection = new mongoose.model(
  "appliedCandidates",
  appliedCandidatesDataModel
);

// Chat History Collection database
const chatCollection = new mongoose.model("chat", chatDataModel);

// message Collection
const messageCollection = new mongoose.model("message", messageModel);

// export data base
module.exports = {
  usersCollection,
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
  chatCollection,
  messageCollection
};
