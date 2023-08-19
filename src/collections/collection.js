const { default: mongoose } = require("mongoose");

// All Model or schema require
const allJobModel = require("../models/allJobModel");
const faqsModel = require("../models/faqsModel");

// all jobs collection database
const allJobCollection = new mongoose.model('AllJob', allJobModel)

// FAQS Collection database
const faqsCollection = new mongoose.model('faqs', faqsModel)

// export data base
module.exports = { allJobCollection, faqsCollection }
