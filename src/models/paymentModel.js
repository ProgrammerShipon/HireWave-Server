const mongoose = require("mongoose");
const paymentDataModel = new mongoose.Schema({
    recruiterId: {
        type: String,
        require: true,
    },
    recruiterName: {
        type: String,
        require: true,
    },
    amount: {
        type: String,
        require: true,
    },
    companyName: {
        type: String,
        require: true,
    },
    companyLogo: {
        type: String,
        require: true,
    },
   
});

module.exports = paymentDataModel;
