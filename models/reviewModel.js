const { Schema } = require("mongoose");

        
const reviewModel = new Schema(
  {
    companyName: {
      type: String,
      require: true,
    },
    companyEmail: {
      type: String,
      require: true,
    },
    logo: {
      type: String,
      require: true,
    },
    authorImage: {
      type: String,
      require: true,
    },
    authorName: {
      type: String,
      require: true,
    },
    authorEmail: {
      type: String,
      require: true,
    },
    authorPosition: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    }, // todo: Date.now()
    rating: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);


module.exports = reviewModel