const mongoose = require('mongoose');

const allCategoryDataModel = new mongoose.Schema({

    category: {
        type: String,
        require: true,
    },
    vacancy: {
        type: Number,
        require: true,
    },
    relatedJobs1: {
        type: Array,
        require: true,
    },
    relatedJobs2: {
        type: Array,
        require: true,
    },
    relatedJobs3: {
        type: Array,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = allCategoryDataModel