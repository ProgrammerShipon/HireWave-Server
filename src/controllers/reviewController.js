const { reviewCollection } = require("../collections/collection");

// post many or single data
const postNewReview = async (req, res) => {
  try {
    const result = await reviewCollection.insertMany(data); // todo: insertMany -> insert
    return await res.status(200).send(result);
  } catch (error) {
    res.status(404).send({message: "Server Error"});
  }
};

// get All Review
const getAllReview = async (req, res, ) => {
  try {
    const result = await reviewCollection.find();
    return await res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ message: "Server Error" });
  }
};

// get Review single data
const getSingleReview = async (req, res) => {
  try {
    await reviewCollection
      .findById(req.params.id)
      .then((review) => res.status(200).send(review))
      .catch(() => res.status(404).send("Data Not Found"));
  } catch (error) {
    res.status(404).send("Data Not Found or Server error");
  }
};

// Delete a candidate by ID
const deleteReview = async (req, res) => {
  try {
    const deletedReview = await reviewCollection.findByIdAndDelete(
      req.params.id
    );
    console.log('Deleted candidate:', deletedReview);
    res.status(200).send(deletedReview);
  } catch (err) {
    console.error('Error deleting candidate:', err);
  }
};

// Update a candidate by ID
const updateReview = async (req, res) => {
  const updateData = req.body;
  try {
    const updatedCandidate = await reviewCollection.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    res.status(200).send(updatedCandidate);
  } catch (err) {
    res.send('Error updating candidate:', err);
  }
};

module.exports = {
  getAllReview,
  postNewReview,
  getSingleReview,
  deleteReview,
  updateReview,
};
