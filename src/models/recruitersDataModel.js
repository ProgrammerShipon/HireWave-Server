const { default: mongoose } = require("mongoose");

const recruitersDataModel=new mongoose.Schema({
    company: {
        type: String,
        require: true,
    },
    logo: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    totalRating: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    },
    industry: {
        type: String,
        require: true,
    },
    openJobs: {
        type: Number,
        require: true,
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})
module.exports=recruitersDataModel