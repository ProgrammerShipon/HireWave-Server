const { default: mongoose } = require("mongoose");
const allJobModel = require("../models/allJobModel");

const allJobCollection = new mongoose.model('All-Job', allJobModel)

module.exports = { allJobCollection }
