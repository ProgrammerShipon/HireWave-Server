require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const cors = require("cors");
const mongoose = require("mongoose");

const allJobRoute = require("./routers/allJobRouter.js");

const PORT = process.env.SERVER_PORT || 3031;
const mongodbURL = process.env.MONGODB_URL;

const connectDB = () => {
  return mongoose
    .connect(mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "hiqmah-607",
    })
    .then(() => console.log("database connected."))
    .catch((err) => console.log(err.message));
};

  connectDB();
// make app
const app = express();

// Application level middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// -------------<  middleware Function  >-------------------
// Root Route
app.get("/", (req, res) => res.status(200).send("Assalamualaikum"));

// All Jobs Route
app.use("/jobs", allJobRoute);

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

// Running Server
app.listen(PORT, async () => {
  console.log(`Server Running - http://localhost:${PORT}`);
});

