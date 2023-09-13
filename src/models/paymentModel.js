const mongoose = require("mongoose");
const paymentDataModel = new mongoose.Schema({
    // recruiterId receiver amount paymentTimeline recruiterName companyLogo
    recruiterId: {
        type: String,
        require: true,
    },
    receiver: {
        type: String,
        require: true,
    },
    amount: {
        type: Number,
        require: true,
    },
    tran_id: {
        type: String,
        require: true,
    },
    paymentTimeline: {
        type: String,
        require: true,
    },
    recruiterName: {
        type: String,
        require: true,
    },
    companyLogo: {
        type: String,
        require: true,
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    }

});

module.exports = paymentDataModel;
