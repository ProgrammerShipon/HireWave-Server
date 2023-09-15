const { faqsCollection } = require("../collections/collection");


// One Data insert Or Many Data
const insertFaqs = async (req, res) => {
  try {
    const result = await faqsCollection.insertMany(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({
      error: "Insert Data Somethings Wrong!",
    });
  }
};

// get all FAQs Data
const getFaqs = async (req, res) => {
  try {
    const result = await faqsCollection.find();
    return await res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      error: "Data Somethings Wrong!",
    });
  }
};

// get single data
const faqsSingleData = (req, res) => {
  faqsCollection
    .findById(req.params.id)
    .then((faqData) => res.status(200).send(faqData))
    .catch(() => res.status(404).send("Data Not Found"));
};

// faq updates function
const faqsUpdate = async (req, res) => {
  const updateData = req.body;
  try {
    const updatedCandidate = await faqsCollection.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    res.status(200).send(updatedCandidate);
  } catch (err) {
    res.status(404).send("updating something wrong");
  }
};

// get single data
const deleteFAQs = (req, res) => {
  faqsCollection
    .findByIdAndDelete(req.params.id)
    .then((faqData) => res.status(200).send(faqData))
    .catch(() => res.status(404).send("Data Not Found"));
};

module.exports = {
  insertFaqs,
  getFaqs,
  faqsSingleData,
  faqsUpdate,
  deleteFAQs,
};
