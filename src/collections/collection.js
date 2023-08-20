const mongoose = require("mongoose");
const allJobModel = require("../models/allJobModel");
const jobLocationDataModel = require("../models/jobLocationDataModel");
const candidateDataModel = require("../models/candidateDataModel");

// const allJobCollection = new mongoose.model('AllJob', allJobModel)
const allJobCollection = mongoose.model("AllJob", allJobModel)
const jobLocationCollection = mongoose.model("JobLocation", jobLocationDataModel)
const allJobCandidate = mongoose.model("candidates", candidateDataModel)

module.exports = { allJobCollection, jobLocationCollection, allJobCandidate }
