const { chatCollection } = require("../collections/collection");

const createChat = async (req, res) => {
  const newChat = new chatCollection({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const usersChat = async (req, res) => {
  try {
    const chat = await chatCollection.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findChat = async (req, res) => {
  try {
    const chat = await chatCollection.find({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { createChat, usersChat ,findChat};
