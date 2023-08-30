const { default: mongoose } = require("mongoose");

const jobLocationDataModel=new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    vacancy: {
        type: String,
        require: true,
    },
    companies: {
        type: Number,
        require: true,
    },
})
module.exports=jobLocationDataModel