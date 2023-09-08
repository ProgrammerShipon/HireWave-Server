const { Schema } = require("mongoose");

const userDataModel = new Schema(
  {
    role: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    joinDate: {
      type: Date,
      default: Date.now
    }
  }
);

module.exports = userDataModel;