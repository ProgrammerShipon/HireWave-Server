import mongoose from "mongoose";
console.clear();

// https://mongoosejs.com/docs/schematypes.html#maps

const schema = new mongoose.Schema({
  title: String,
  description: String,
  reactions: {
    type: Map,
    of: String,
    required: true,
  },
});

// const model = mongoose.model("Video", schema);

const video = new model({
  title: "My video",
  description: "This is my video",
  reactions: {
    "user-id-1": "like",
    "user-id-23231": "like",
    "user-id-2": "dislike",
    "user-id-2-234234": "dislike",
  },
});

video.reactions.set("user-id-100", "like");
video.reactions.delete("user-id-1");

const likes = [...video.reactions.values()].filter(
  (reaction) => reaction === "like"
).length;

const dislike = [...video.reactions.values()].filter(
  (reaction) => reaction === "dislike"
).length;

console.log(likes, dislike);
console.log(video);

// Frontend:

const hasReaction = video.reactions.get("user-id-1");
console.log(hasReaction == "like");
console.log(hasReaction == "dislike");
