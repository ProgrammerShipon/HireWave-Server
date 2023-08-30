const mongoose = require('mongoose');
const { mongodbURL } = require('../secret');

const connectDB = async (options = {}) => {
   try {
      // await mongoose.connect(mongodbURL, options);
      // console.log('Connection successfully ✅');


      // mongoose.connection.on('error', (error) => {
      //    console.error('DB connection error', error);
      // })

      await mongoose
        .connect(mongodbURL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          dbName: "hire-wave",
        })
        .then(() => console.log("Database connection successful ✅"))
        .catch((err) => console.log(err));
   } catch (error) {
      console.error('Could not connect to DB: ❌ ', error.toString());
   }
}

module.exports = connectDB