// terminal clear
console.clear();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const cors = require("cors");
// const rateLimit = require("express-rate-limit");

// Router require
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./secret");

// all route require
const userRouter = require("./routers/userRouter");
const faqsRoute = require("./routers/faqsRoute");
const reviewsRoute = require("./routers/reviewsRoute");
const learningRoute = require("./routers/learningRoute");
const allJobRoute = require("./routers/allJobRouter");
const candidateRoute = require("./routers/candidateRoute");
const partnersRoute = require("./routers/partnersRoute");
const allCategoryRoute = require("./routers/allCategoryRoute");
// const jobLocationRoute = require("./routers/JobLocationRouter");
const recruiterRoute = require("./routers/recruitersRoute");
const appliedCandidateRoute = require("./routers/appliedCandidatesRoute");
const messageRoute = require("./routers/messageRoute");
const savedJobRoute = require("./routers/savedJobRoute");
const paymentRoute = require("./routers/paymentRoute");
const chatRoute = require("./routers/chatRoute");
const tasksRoute = require("./routers/taskRoute");
const jobOfferRoute = require("./routers/jobOfferRoute");
const favoriteRoute = require("./routers/favoriteRoute");
const followRoute = require("./routers/followRoute");

const app = express();

// Application level middleware
app.use(cors());
app.use(morgan("dev"));
app.use(xssClean());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root Route
app.get("/", (req, res) =>
  res.status(200).send(`Assalamualaikum. <br/> Hire Wave Server Running`)
);

// send jwt token
app.post("/api/jwt", (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, jwtSecret, { expiresIn: "50h" });
  res.send({ token });
});

//========== All User Route Start ==========//

//- User route
app.use("/api/users", userRouter);

// Recruiter route Complete -
app.use("/api/recruiters", recruiterRoute);

// All jobs Route - Connections Done
app.use("/api/candidates", candidateRoute);

// all Category route Complete
app.use("/api/appliedCandidate", appliedCandidateRoute);

// any task recruiter & candidate
app.use("/api/task", tasksRoute);

// any Job Offer recruiter & candidate
app.use("/api/job_offer", jobOfferRoute);

// any favorite recruiter & candidate
app.use("/api/favorite", favoriteRoute);

// any follow recruiter & candidate
app.use("/api/follow", followRoute);


//========== All User Route End ==========//


//========== All job Route Start ==========//


// all Category route Complete
app.use("/api/allCategory", allCategoryRoute);

// All jobs Route complete - Connections Done
app.use("/api/allJobs", allJobRoute);

//jobLocationRoute route Complete
// app.use("/api/jobLocation", jobLocationRoute);

// all Category route Complete
app.use("/api/savedjob", savedJobRoute);

// api/review/insert
app.use("/api/review", reviewsRoute);

//========== All job Route end ==========//


//========== All payment Systems Route Start ==========//

// payment
app.use("/api/payment", paymentRoute);

//========== All payment Systems Route end ==========//


//========== All message & Interviews Route Start ==========//

// user chatting
app.use("/api/chat", chatRoute);

// user message
app.use("/api/message", messageRoute);

//========== All message & Interviews Route end ==========//


//========== All Others Route end ==========//

// faq Route - connections Done
app.use("/api/faqs", faqsRoute);

// learning blog api - connections Done
app.use("/api/learning", learningRoute);

// partners route Complete
app.use("/api/partners", partnersRoute);


//========== All Others Route end ==========//

// client error handling
app.use((req, res, next) => {
  //  res.status(404).json({ message: 'route not found' })
  createError(404, "route not found");
  next();
});

// server error handling -> all the errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send(err);

  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
    error: err,
  });
});

module.exports = app;
