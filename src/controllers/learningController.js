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
  {
    authorName: "Learn with Sumit",
    authorEmail: "sumit@gmail.com",
    authorImg: "https://i.ibb.co/FXjXDfX/Sumit.jpg",
    category: "Version Control",
    thumbnail: "https://i.ibb.co/BrDpnZ6/sumit-thumb.webp",
    videoTitle: "Crash Course - Git & GitHub Tutorial",
    description:
      "Git is a version control mechanism that tracks changes in the file system, maintaining records of versions before and after each change, while GitHub is a cloud hosting service for these changes and versions, analogous to a coffee shop for Git.",
    videoLink: "https://youtu.be/oe21Nlq8GS4",
    comment: [
      {
        commenterName: "neha mia",
        commenterEmail: "neha@gmail.com",
        commentText: "Very Helpful video",
        commentDate: "08/08/2023",
        replyId: "7hfk457",
        commentId: "95682",
      },
    ],
  },
  {
    authorName: "Stack Learner",
    authorEmail: "nayem@gmail.com",
    authorImg: "https://i.ibb.co/yyGG0LM/stack.jpg",
    category: "JavaScript,Programming",
    thumbnail: "https://i.ibb.co/7RYk7pY/stack-thumb.webp",
    videoTitle:
      "JavaScript OOP Simplified - Master the Basics and Build a Real-World Project",
    description:
      "Discover JavaScript OOP through a crash course that includes building a real-world project. Gain proficiency in objects, classes, and constructors.",
    videoLink: "https://youtu.be/B6vSq4KiZeM",
    comment: [
      {
        commenterName: "anik",
        commenterEmail: "anik@gmail.com",
        commentText: "wow",
        commentDate: "08/08/2023",
        replyId: "7hfk457",
        commentId: "95682",
      },
    ],
  },
  {
    authorName: "Programming Hero Community",
    authorEmail: "Programming@gmail.com",
    authorImg: "https://i.ibb.co/YtYJ7KH/P.jpg",
    category: "Programming",
    thumbnail: "https://i.ibb.co/K5T7gWs/pThumb.jpg",
    videoTitle: "Complete CSS Crash Course Bangla",
    description: "Complete CSS Crash Course Bangla project in the real world",
    videoLink: "https://youtu.be/OPkf3FpRKXQ",
    comment: [
      {
        commenterName: "lilu",
        commenterEmail: "lilu@gmail.com",
        commentText: "just wow",
        commentDate: "08/08/2023",
        replyId: "7hfk457",
        commentId: "95682",
      },
    ],
  },
  {
    authorName: "Procoder BD",
    authorEmail: "Procoderbd@gmail.com",
    authorImg: "https://i.ibb.co/xHZPkWd/Pro.jpg",
    category: "Programming, Tools",
    thumbnail: "https://i.ibb.co/QvXMnnq/proc.jpg",
    videoTitle: "Ultimate Docker Crash Course | Docker Tutorial for Beginners",
    description:
      "When everyone around is making Docker sound complicated, I thought, let's simplify it, and maybe I can help you understand Docker a bit more easily. If you watch this video with full attention, I hope you'll grasp Docker well",
    videoLink:
      "https://youtu.be/urisGIi_pmE?list=PLSNRR4BKcowAuPUEja_ZZUE5Szn1rx90f",
    comment: [
      {
        commenterName: "asif",
        commenterEmail: "asif@gmail.com",
        commentText: "just awesome video",
        commentDate: "08/08/2023",
        replyId: "7hfk457",
        commentId: "95682",
      },
    ],
  },
  {
    authorName: "Programming With Mosh",
    authorEmail: "mosh@gmail.com",
    authorImg: "https://i.ibb.co/Y8G2jZs/m.jpg",
    category: "Programming",
    thumbnail: "https://i.ibb.co/XCjLNSs/mo.jpg",
    videoTitle: "React Tutorial for Beginners",
    description:
      "React JS Tutorial for Beginners - Learn React 18 with TypeScript and build awesome frontend app!",
    videoLink: "https://youtu.be/SqcY0GlETPk",
    comment: [
      {
        commenterName: "anika",
        commenterEmail: "anila@gmail.com",
        commentText: "just awesome video",
        commentDate: "08/08/2023",
        replyId: "7hfk457",
        commentId: "95682",
      },
    ],
  },
];

// insert learning
const insertLearning = async (req, res, next) => {
  try {
    const result = await learningCollection.insertMany(learningData);
    return await res.status(200).send({
      message: "insert successful! ✅",
      data: result,
    });
  } catch (error) {
    res.status(200).send({error: error?.message});
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
