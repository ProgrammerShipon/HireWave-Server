const mongoose = require("mongoose");
const allJobModel = require("../models/allJobModel");

// const allJobCollection = new mongoose.model('AllJob', allJobModel)
const allJobCollection = mongoose.model("AllJob", allJobModel)

module.exports = {allJobCollection}
