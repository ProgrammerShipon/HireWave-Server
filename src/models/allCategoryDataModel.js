const mongoose = require("mongoose");

const allCategoryDataModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subcategories: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = allCategoryDataModel;
