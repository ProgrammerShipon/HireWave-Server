// terminal clear
// console.clear()

const app = require("./src/app");
const connectDB = require("./src/config/db");
const { PORT } = require("./src/secret");

// Running Server
// const uri = `mongodb+srv://hiqmah-607:3bSe7cpTWxq6iTOL@cluster0.v0qnf3o.mongodb.net/`;

  try {
    app.listen(PORT, async () => {
      console.log(`Server Running - http://localhost:${PORT}`);
    });

  } catch (error) {
    console.log(error.message)
  }
// run().catch(console.dir);

