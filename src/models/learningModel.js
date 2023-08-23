const { Schema } = require("mongoose");

const learningModel = new Schema(
  {
    category: {
      type: String,
      require: true,
    },
    thumbnail: {
      type: String,
      require: true,
    },
    videoTitle: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    videoLink: {
      type: String,
      require: true,
    },
    authorName: {
      type: String,
    },
    authorEmail: {
      type: String,
    },
    authorImg: {
      type: String,
    },
    comment: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = learningModel