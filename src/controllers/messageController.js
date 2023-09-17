const { messageCollection } = require("../collections/collection");

const createMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  const message = new messageCollection({
    chatId,
    senderId,
    text,
  });
  try {
    const result = await message.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const result = await messageCollection.find({ chatId });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllMessages = async (req, res) => {
  try {
    const result = await messageCollection.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createMessage, getMessages, getAllMessages };
