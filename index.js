const { PORT } = require("./src/secret");
const connectDB = require("./src/config/db");
const app = require("./src/app");
connectDB();

// const functions = require('firebase-functions')


// Running Server
try {
  app.listen(PORT, async () => {
    console.log(`Server Running - http://localhost:${PORT}`);
  });

} catch (error) {
  console.log(error.message)
}

// exports.api = functions.https.onRequest(app)
