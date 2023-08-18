const express = require("express");
const { ObjectId } = require("mongodb");
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
// express app initialization
const app = express();
app.use(express.json());


// Create  schema 
// Create Collection
// database connection with mongoose
const connectDB = async () => {
   try {
      await mongoose.connect('mongodb+srv://hiqmah-607:3bSe7cpTWxq6iTOL@cluster0.v0qnf3o.mongodb.net/')
      console.log('DB connect success')
   } catch (error) {
      console.log('DB Not Connect', error)
   }
}


app.get('/', (req, res) => {
   res.send("sonar bangladesh")
})

app.listen(port, async () => {
   console.log(`app listening at port ${port}`);
   await connectDB()
});