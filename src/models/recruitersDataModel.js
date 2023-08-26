const { default: mongoose } = require("mongoose");

const recruitersDataModel = new mongoose.Schema({
    company: {
        type: String,
        require: true,
    },
    logo: {
        type: String,
        require: true,
    },
    companyEmail: {
        type: String,
        require: true,
    },
    companyBanner: {
        type: String,
        require: true,
    },
    followers: {
        type: Number,
        require: true,
    },
    about: {
        type: String,
        require: true,
    },
    specialties: {
        type: String,
        require: true,
    },
    recentReview: {
        type: Array,
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
    joinDate: {
        type: Date,
        default: Date.now
    }
})
module.exports = recruitersDataModel