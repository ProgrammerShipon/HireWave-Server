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
        type: String,
        require: true,
    }
});

module.exports = candidateDataModel