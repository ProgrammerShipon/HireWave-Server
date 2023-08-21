const mongoose = require('mongoose');

const candidateDataModel =new mongoose.Schema({

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
    profession: {
        type: String,
        require: true,
    },
    experience: {
        type: String,
        require: true,
    },
    about: {
        type: String,
        require: true,
    },
    active: {
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
    age: {
        type: String,
        require: true,
    },
    workRate: {
        type: String,
        require: true,
    },
    currentJob: {
        type: String,
        require: true,
    },
    currentSalary: {
        type: String,
        require: true,
    },
    expectedSalary: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    language: {
        type: Array,
        require: true,
    },
    joinSince: {
        type: String,
        require: true,
    },
    educationalLevel: {
        type: String,
        require: true,
    },
    education: {
        type: Array,
        require: true,
    },
    workExperience: {
        type: Array,
        require: true,
    },
    awards: {
        type: Array,
        require: true,
    },
});

module.exports = candidateDataModel