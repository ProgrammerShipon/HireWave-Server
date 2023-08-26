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
// const userRouter = require("./routers/userRouter");
const faqsRoute = require("./routers/faqsRoute");
const learningRoute = require("./routers/learningRoute");
const reviewsRoute = require("./routers/reviewsRoute");
const allJobRoute = require("./routers/allJobRouter");
const candidateRoute = require("./routers/candidateRoute");
const partnersRoute = require("./routers/partnersRoute");
const allCategoryRoute = require("./routers/allCategoryRoute");
const jobLocationRoute = require("./routers/JobLocationRouter");
const recruiterRoute = require("./routers/recruitersRoute");
const appliedCandidateRoute = require("./routers/appliedCandidatesRoute");
const userRouter = require("./routers/userRouter");

const app = express();

// Application level middleware
app.use(cors());
app.use(morgan("dev"));
app.use(xssClean());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root Route
app.get("/", (req, res) => res.status(200).send("Assalamualaikum"));

/**
 * Route or apis
 * - api/users/
 */
// app.use('/api/users', userRouter)

/**
 * FAQs Route
 * - api/faqs
 */
app.use("/api/faqs", faqsRoute);

/**
 * reviews api
 * - api/review/insert
 */
app.use("/api/review", reviewsRoute);

/**
 * learning api
 * - api/learning
 */
app.use("/api/learning", learningRoute);

// User Data Route
app.use("/api/users", userRouter);

// All jobs Route complete
app.use("/api/allJobs", allJobRoute);

// All jobs Route
app.use("/api/jobCandidates", candidateRoute);

// partners route Complete
app.use("/api/partners", partnersRoute);

// all Category route Complete
app.use("/api/allCategory", allCategoryRoute);

// all Category route Complete
app.use("/api/jobLocation", jobLocationRoute);

// all Category route Complete
app.use("/api/recruiters", recruiterRoute);

// all Category route Complete
app.use("/api/appliedCandidate", appliedCandidateRoute);

// client error handling
app.use((req, res, next) => {
  //  res.status(404).json({ message: 'route not found' })
  createError(404, "route not found");
  next();
});

// server error handling -> all the errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something server broke!");

  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
    error: err,
  });
});

module.exports = app;
