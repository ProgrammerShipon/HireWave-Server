const express = require("express");
const app = express();
const cors = require('cors')
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
require('dotenv').config()
const jobLocationRoute = require("./src/routers/JobLocationRouter");
const recruiterRoute = require("./src/routers/recruitersRoute");
const allJobRoute = require("./src/routers/allJobRouter");
const candidateRoute = require("./src/routers/candidateRoute");

// All Route import 




const opt = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

// Application level middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(xssClean());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Root Route
app.get("/", (req, res) =>
  res.status(200).send("Assalamualaikum")
);


// user route
// app.use('/api/users', userRouter)

// All Jobs Route Complete **
app.use('/alljobs', allJobRoute)

// All Candidates Route Complete **
app.use('/allCandidates' , candidateRoute)

// Job By Location Route  Complete **
app.use('/jobByLocation', jobLocationRoute)

// RECRUITERS  Route  Complete **
app.use('/recruiters' , recruiterRoute)

app.get('/ba' , async(req , res)=>{
  res.send('ikjbieqwbhiiib')
})


module.exports = app;
