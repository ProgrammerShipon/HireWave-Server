// terminal clear
// console.clear()

const app = require("./app");
const connectDB = require("./src/config/db");
const { PORT } = require("./src/secret");

// Running Server


async function run() {
  try {
    app.listen(PORT, async () => {
      console.log(`Server Running - http://localhost:${PORT}`);
      await connectDB();
    });

  } catch (error) {
    console.log(error.message)
  }
}
run().catch(console.dir);

