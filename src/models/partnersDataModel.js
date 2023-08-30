const mongoose = require('mongoose');

const partnersDataModel = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    logoImg: {
        type: String,
        require: true,
    },
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = partnersDataModel