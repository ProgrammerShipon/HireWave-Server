const { Schema } = require("mongoose");

const faqsModel = new Schema({
  question: {
    type: String,
    require: true,
  },
  answer: {
    type: String,
    require: true,
  },
});

module.exports = faqsModel