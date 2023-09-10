const { learningCollection } = require("../collections/collection");

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
const updateLearning = async (req, res) => {
  const updateData = req.body;
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

// Delete a Learning by ID
const deleteLearning = async (req, res) => {
  const updateData = req.body;
  console.log('Update Data -> ', updateData);
  // try {
  //   const updatedLearning = await learningCollection.findByIdAndDelete(
  //     req.params.id,
  //     updateData,
  //     { new: true }
  //   );
  //   res.status(200).send(updatedLearning);
  // } catch (err) {
  //   res.status(404).send("Error updating candidate:");
  // }
};

// export file
module.exports = {
  updateLearning,
  insertLearning,
  getLearning,
  singleLearning,
  deleteLearning,
};
