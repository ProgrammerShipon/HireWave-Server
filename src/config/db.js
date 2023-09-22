const mongoose = require('mongoose');
const { mongodbURL } = require('../secret');

const connectDB = async () => {
   mongoose.set('strictQuery', false);
   try {
      await mongoose
         .connect(mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "hire-wave",
         })
         .then(() => console.log("Database connection successful"))
         .catch((err) => console.log(err));
   } catch (error) {
      console.error('Could not connect to DB: ', error.toString());
   }
}

module.exports = connectDB