const { Schema } = require("mongoose");

const userDataModel = new Schema(
  {
    role: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["approved", "pending", "rejected"],
      default: "pending",
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