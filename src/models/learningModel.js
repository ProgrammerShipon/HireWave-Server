const mongoose = require("mongoose");

// Define a schema for the comments
const commentSchema = new mongoose.Schema({
  commenterImg: String,
  commenterName: String,
  commenterEmail: String,
  commentText: String,
  commentTime: String,
  commentId: String,
});

const learningModel = new mongoose.Schema(
  {
    category: String,
    thumbnail: String,
    title: String,
    videoLink: String,
    authorName: String,
    authorEmail: String,
    authorImg: String,
    comments: [commentSchema],
    readTime: Number,
    like: Number,
    disLike: Number,
    views: Number,
    description: String,
  },
  { timestamps: true }
);

module.exports = learningModel