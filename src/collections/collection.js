const mongoose = require("mongoose");

const jobLocationDataModel = require("../models/jobLocationDataModel");
const candidateDataModel = require("../models/candidateDataModel");
const recruitersDataModel = require("../models/recruitersDataModel");
const allJobModel = require("../models/allJobModel");

const allJobCollection = new mongoose.model('alljobs', allJobModel)

const allCandidatesCollection = new mongoose.model('allcandidates', candidateDataModel)

const jobLocationCollection = new mongoose.model('joblocations', jobLocationDataModel)

const recruitersCollection = new mongoose.model('recruiters', recruitersDataModel)

module.exports = { allJobCollection, jobLocationCollection, recruitersCollection, allCandidatesCollection }
