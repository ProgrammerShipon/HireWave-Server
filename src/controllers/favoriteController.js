const { favoriteCollection } = require("../collections/collection");

// Favorite All Data
const getAllFavorite = async (req, res) => {
   try {
      const result = await favoriteCollection.find()
      res.status(200).send(result)
   } catch (err) {
      console.log("getAllFavorite -> ", err);
      res.status(404).send({ message: "Server Error" });
   }
}

// Favorite All Data
const postFavorite = async (req, res) => {
   const bodyData = req.body;
   console.log("bodyData", bodyData);

   try {
      const result = await favoriteCollection(bodyData).save();
      console.log('result -> ', result)
      res.status(200).send(result);
   } catch (err) {
      console.log("getAllFavorite -> ", err);
      res.status(404).send({ message: "Server Error" });
   }
}

module.exports = { getAllFavorite, postFavorite };