const { PORT } = require("./src/secret");

const connectDB = require("./src/config/db");
connectDB();

const app = require("./src/app");

// Running Server
try {
  app.listen(PORT, async () => {
    console.log(`Server Running - http://localhost:${PORT}`);
  });

} catch (error) {
  console.log(error.message)
}


