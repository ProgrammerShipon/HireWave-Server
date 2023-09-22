const { followCollection } = require("../collections/collection");

// Follow All Data
const getAllFollow = async (req, res) => {
     try {
       const result = await followCollection.find();
       res.status(200).send(result);
     } catch (error) {
        console.log('getAllFollow ->', error)
       res.status(500).send({
         message: "Data Somethings Wrong!",
       });
     }
}

// Follow Store 
const postFollow = async (req, res) => {
  const bodyData = req.body;
  try {
    // check already exists or not
    const isExit = await followCollection.findOne({
      recruiterEmail: bodyData?.recruiterEmail,
      candidateEmail: bodyData?.candidateEmail,
    });
    if (!isExit) {
      const result = await followCollection(bodyData).save();
      res.status(200).send(result);
    } else {
      // send to client
      res.status(201).send({ message: "Already exists" });
    }
  } catch (err) {
    console.log("postFollow -> ", err);
    res.status(500).send({ message: "Server Error" });
  }
};

// Follow data delete 
const deleteFollow = async (req, res) => {
   try {
      const result = await followCollection.findByIdAndDelete(req.params.id);
      // send to client
      res.status(200).send(result);
   } catch (err) {
      console.log("deleteFollow delete -> ", err);
      res.status(404).send({ message: "Server Error" });
   }
};

// Follow data find by recruiter email
const recruiterFollow = async (req, res) => {
   const emailEmail = req?.params?.email;
   try {
      const result = await followCollection.findOne({
         recruiterEmail: emailEmail,
      });

      if (result) {
         res.status(200).send(result);
      }

   } catch (err) {
      console.log('recruiterFollow -> ', err);
      res.status(404).send({ message: 'Server Error' });
   }
};

// Follow data find by candidate email
const candidateFollow = async (req, res) => {
  const emailEmail = req.params.email;
  try {
    const result = await followCollection.findOne({
      candidateEmail: emailEmail,
    });
      if (result) {
        res.status(200).send(result);
      }
  } catch (err) {
    console.log('candidateFollow -> ', err);
    res.status(404).send({ message: "Server Error" });
  }
};

// Follow data find by candidate email
const candidateFollows = async (req, res) => {
  const emailEmail = req.params.email;
  try {
    const result = await followCollection.find({
      candidateEmail: emailEmail,
    });
    if (result) {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log("candidateFollow -> ", err);
    res.status(404).send({ message: "Server Error" });
  }
};

module.exports = {
  getAllFollow,
  postFollow,
  deleteFollow,
  candidateFollow,
  recruiterFollow,
  candidateFollows,
};
