const { learningCollection } = require("../collections/collection");
const { updateData } = require("./recruitersController");

// insert learning
const insertLearning = async (req, res) => {
  try {
    const result = await learningCollection.insertMany(req.body);
    return await res.status(200).send(result);
  } catch (error) {
    res.status(200).send({ error: error?.message });
  }
};

// get all data
const getLearning = async (req, res) => {
  try {
    const learningBlog = await learningCollection.find();
    res.status(200).send(learningBlog);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

// Learning Single Data
const singleLearning = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await learningCollection.findById(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: "Not Found Learning Data" });
  }
};

// Update a Learning by ID
const updateLearningLike = async (req, res) => {
  try {
    const updatedLearning = await learningCollection.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { like: 1 } },
      { new: true },);
    // console.log()
    res.status(200).send(updatedLearning);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// Update a Learning by ID
const updateLearningDisLike = async (req, res) => {
  // const increaseLikeBy = 5;
  try {
    const updatedLearning = await learningCollection.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { disLike: 1 } },
      { new: true },);
    // console.log()
    res.status(200).send(updatedLearning);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// Update a Learning by ID
const updateLearningView = async (req, res) => {
  // const increaseLikeBy = 5;
  try {
    const updatedLearning = await learningCollection.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { views: 1 } },
      { new: true },);
    // console.log()
    res.status(200).send(updatedLearning);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// Delete a Learning by ID
const deleteLearning = async (req, res) => {
  const updateData = req.body;
  console.log('Update Data -> ', updateData);
  try {
    const updatedLearning = await learningCollection.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    res.status(200).send(updatedLearning);
  } catch (err) {
    res.status(404).send("Error updating candidate:");
  }
};

const updateInteractions = (req, res) => {
  const upData = req.body; 
  console.log(upData);
  const d = {
    like: 647,
    disLike: 74,
    views: 8,
  };


  // const increaseLikeBy = 5;
  // try {
  //   const updatedLearning = await learningCollection.findOneAndUpdate(
  //     { _id: req.params.id },
  //     { $inc: { views: 1 } },
  //     { new: true },);
  //   // console.log()
  //   res.status(200).send(updatedLearning);
  // } catch (error) {
  //   res.status(404).send(error.message);
  // }
}

// export file
module.exports = {
  updateLearningLike,
  updateLearningDisLike,
  updateLearningView,
  insertLearning,
  getLearning,
  singleLearning,
  deleteLearning,
  updateInteractions,
};
