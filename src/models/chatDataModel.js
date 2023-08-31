const { default: mongoose } = require("mongoose");

const chatDataModel = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = chatDataModel;
