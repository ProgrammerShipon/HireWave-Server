const { favoriteCollection } = require("../collections/collection");

// Favorite All Data
const getAllFavorite = async (req, res) => {
     try {
       const result = await favoriteCollection.find();
       res.status(200).send(result);
     } catch (error) {
        console.log('getAllFavorite ->', error)
       res.status(500).send({
         message: "Data Somethings Wrong!",
       });
     }
}

// Favorite Store 
const postFavorite = async (req, res) => {
  const bodyData = req.body;
  
  try {
    // check already exists or not
    const isExit = await favoriteCollection.findOne({
      candidateEmail: bodyData?.candidateEmail,
      recruiterEmail: bodyData?.recruiterEmail,
    });
    if (!isExit) {
      const result = await favoriteCollection(bodyData).save();
      res.status(200).send(result);
    } else {
      // send to client
      res.status(201).send({ message: "Already exists" });
    }
  } catch (err) {
    console.log("postFavorite -> ", err);
    res.status(500).send({ message: "Server Error" });
  }
};

// Favorite data delete 
const deleteFavorite = async (req, res) => { 
   console.log(req.params.id);
   try {
      const result = await favoriteCollection.findByIdAndDelete(req.params.id);
      // send to client
      res.status(200).send(result);
   } catch (err) {
      console.log("deleteFavorite delete -> ", err);
      res.status(404).send({ message: "Server Error" });
   }
};

// favorite data find by recruiter email
const recruiterFavorite = async (req, res) => {
   const emailEmail = req?.params?.email;
   try {
      const result = await favoriteCollection.findOne({
         recruiterEmail: emailEmail,
      });

      if (result) {
         res.status(200).send(result);
      }

   } catch (err) {
      console.log('recruiterFavorite -> ', err);
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
    
      console.log("candidate_email/:email -> ", result);
      if (result) {
        res.status(200).send(result);
      }
  } catch (err) {
    console.log('candidateFavorite -> ', err);
    res.status(404).send({ message: "Server Error" });
  }
};

module.exports = { getAllFavorite, postFavorite, deleteFavorite, candidateFavorite, recruiterFavorite };
