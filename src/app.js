const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");
const cors = require('cors')

const app = express();

// Application level middleware
app.use(cors());
app.use(morgan("dev"));
app.use(xssClean());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -------------<  middleware Function  >-------------------
// Login status
const isLogin = (req, res, next) => {
  const login = true;
  if (login) {
    next();
  } else {
    return res.status(401).send({ message: "please login" });
  }
};

// Login Limit Set
const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: {message: "Too many requests from this IP. please try again later ."},
});

// Root Route
app.get("/", rateLimiter, (req, res) =>
  res.status(200).send("Assalamualaikum")
);

/**
 * Route or apis
 * - api/users/
 * - api/seed/
 */
app.use('/api/users', userRouter)

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
