const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const cors = require('cors'); 
const jobLocationRoute = require("./routers/JobLocationRouter");
const recruiterRoute = require("./routers/recruitersRoute");
const allJobRoute = require("./routers/allJobRouter");

// All Route import 


const app = express();

const opt = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

// Application level middleware
app.use(cors(opt));
app.use(morgan("dev"));
app.use(xssClean());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -------------<  middleware Function  >-------------------
// Login status
// const isLogin = (req, res, next) => {
//   const login = true;
//   if (login) {
//     next();
//   } else {
//     return res.status(401).send({ message: "please login" });
//   }
// };

// Login Limit Set
// const rateLimiter = rateLimit({
//   windowMs: 1 * 60 * 1000,
//   max: 5,
//   message: { message: "Too many requests from this IP. please try again later ." },
// });

// Root Route
app.get("/", (req, res) =>
  res.status(200).send("Assalamualaikum")
);

/**
 * Route or apis
 * - api/users/
 * - api/seed/
 */
// user route
// app.use('/api/users', userRouter)

// All Jobs Route
app.use('/alljobs', allJobRoute)

// Job By Location Route  Complete **
app.use('/jobByLocation', jobLocationRoute)

// RECRUITERS  Route  Complete **
app.use('/recruiters' , recruiterRoute)

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
