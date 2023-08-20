const { learningCollection } = require("../collections/collection");

const learningData = [
  {
    authorName: "Anisul Islam",
    authorEmail: "anis@gmail.com",
    authorImg: "https://i.ibb.co/XbS5bv7/Anisul-Islam.jpg",
    category: "Programming & Tech Guides",
    thumbnail: "https://i.ibb.co/PzwQr80/hqdefault-1.webp",
    videoTitle: "Complete HTML course in Bangla 2022",
    description:
      "In this video, I will discuss HTML, the basement of web development. It is a complete HTML course; not a crash course.",
    videoLink: "https://youtu.be/zsYMgmb2oCM",
    comment: [
      {
        commenterName: "ashik mia",
        commenterEmail: "ashiik@gmail.com",
        commentText: "Very Wonderful video",
        commentDate: "08/08/2023",
        replyId: "7hfk457",
        commentId: "95682",
      },
    ],
  },
];

const insertLearning = async (req, res, next) => {
  try {
    const result = await learningCollection.insertMany(learningData);
    return await res.status(200).send({
      message: "insert successful! ✅",
      data: result,
    });
  } catch (error) {
    next(error?.message);
  }
};

// get all data
const getLearning = async (req, res, next) => {
  try {
    const result = await learningCollection.find();
    return await res.status(200).send({
      message: "learning Data get successful",
      data: result,
    });
  } catch (error) {
    next(error?.message);
  }
};

// insert learning data
const postLearning = async (req, res, next) => {
  try {
    const bodyData = req.body;
    const result = bodyData;
    return res?.status(200)?.send({
      message: "post completed",
      data: result,
    });
  } catch (error) {
    next(error?.message);
  }
};

// update control
const learningUpdate = async (req, res, next) => {
  try {
    const upData = req.body;
    console.log(upData);
  } catch (error) {
    next(error?.message);
  }
};

module.exports = { postLearning, insertLearning, getLearning, learningUpdate };
