const { default: mongoose } = require("mongoose");

const messageModel = new mongoose.Schema(
    {
        chatId: {
            type: String,
            required: true
        },
        senderId: {
            type: String,
            required: true
        },
        text: String
    },
    {
        timestamps: true
    }
);

module.exports = messageModel