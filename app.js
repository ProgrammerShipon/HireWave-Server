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
const jwt = require('jsonwebtoken')
const jwtVerify = require("./src/Middleware/jwtVerify");
const { jwtSecret } = require("./src/secret");
const faqsRoute = require("./src/routers/faqsRoute");
const learningRoute = require("./src/routers/learningRoute");
const allJobRoute = require("./src/routers/allJobRouter");
const candidateRoute = require("./src/routers/candidateRoute");
const partnersRoute = require("./src/routers/partnersRoute");
const allCategoryRoute = require("./src/routers/allCategoryRoute");
const jobLocationRoute = require("./src/routers/JobLocationRouter");
const recruiterRoute = require("./src/routers/recruitersRoute");
const appliedCandidateRoute = require("./src/routers/appliedCandidatesRoute");
const userRouter = require("./src/routers/userRouter");

const app = express();

// const corsOptions = {
//   origin: "*",
//   credentials: true,
//   optionSuccessStatus: 200,
// };

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

app.post('/api/jwt', (req, res) => {
  const email = req.body;
  const token = jwt.sign(email, jwtSecret, { expiresIn: '24h' })
   res.status(200).send({ token })
})

//- User route
// app.use('/api/users', userRouter)

// faq Route - connections Done
app.use("/api/faqs", faqsRoute);

//- api/review/insert
// app.use("/api/review", reviewsRoute);

// learning blog api - connections Done
app.use("/api/learning", learningRoute);

// All jobs Route complete - Connections Done
app.use("/api/allJobs", allJobRoute);

// All jobs Route - Connections Done
app.use("/api/candidates", candidateRoute);

// partners route Complete
app.use("/api/partners", partnersRoute);

// all Category route Complete
app.use("/api/allCategory", allCategoryRoute);

// all Category route Complete
app.use("/api/jobLocation", jobLocationRoute);

// all Category route Complete - 
app.use("/api/recruiters", recruiterRoute);

// Applied Candidate route Complete
app.use("/api/appliedCandidate", appliedCandidateRoute);

// all user mange route
app.use("/api/users", userRouter);

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
