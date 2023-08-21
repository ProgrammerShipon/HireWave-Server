// terminal clear
console.clear()

const app = require("./src/app");
const connectDB = require("./src/config/db");
const { PORT } = require("./src/secret");

// Running Server
try {
  app.listen(PORT, async () => {
    console.log(`Server Running - http://localhost:${PORT}`);
    await connectDB();
  });

} catch (error) {
console.log(error.message)
}
