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

// Favorite Store 
const postFavorite = async (req, res) => {
   const bodyData = req.body;
   try {
      // check all ready exit or not 
      const isExit = await favoriteCollection.findOne({
         candidateEmail: bodyData?.candidateEmail,
         recruiterEmail: bodyData?.recruiterEmail,
      });
      if (!isExit) {
         const result = await favoriteCollection(bodyData).save();
         res.status(200).send(result);
      }

      // send to client
      res.status(201).send({ massage: 'Already exit' });
   } catch (err) {
      console.log("getAllFavorite -> ", err);
      res.status(404).send({ message: "Server Error" });
   }
};

// favorite data find by recruiter email
const recruiterFavorite = async (req, res) => {
   const emailEmail = req.params.email;
   try {
      const result = await favoriteCollection.findOne({
         recruiterEmail: emailEmail,
      });
      res.status(200).send(result);
   } catch (err) {
      console.log(err);
      res.status(404).send({ message: 'Server Error' });
   }
};

// favorite data find by candidate email
const candidateFavorite = async (req, res) => {
  const emailEmail = req.params.email;
  try {
    const result = await favoriteCollection.findOne({
      candidateEmail: emailEmail,
    });
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send({ message: "Server Error" });
  }
};

module.exports = { getAllFavorite, postFavorite, candidateFavorite, recruiterFavorite };