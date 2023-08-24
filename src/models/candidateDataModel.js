const mongoose = require('mongoose');

const candidateDataModel = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    images: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    about: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    skills: {
        type: Array,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    },
    languages: {
        type: Array,
        require: true,
    },
    recentReview: {
        type: Array,
        require: true,
    },
    hourlyRate: {
        type: Number,
        require: true,
    },
    recommendations: {
        type: Number,
        require: true,
    },
    salaryRange: {
        type: String,
        require: true,
    },
    education: {
        type: Array,
        require: true,
    },
    experience: {
        type: Array,
        require: true,
    },
    joinDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = candidateDataModel