const { default: mongoose } = require("mongoose");

const faqsDataModel = new mongoose.Schema({
    question: {
        type: String,
        require: true,
    },
    answer: {
        type: String,
        require: true,
    },
})
module.exports = faqsDataModel;