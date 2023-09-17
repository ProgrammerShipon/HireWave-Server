const { chatCollection } = require("../collections/collection");

const createChat = async (req, res) => {
  const { firstId, secondId } = req.body;
  console.log(firstId, secondId)

  try {

    const chat = await chatCollection.find({
      members: { $all: [firstId, secondId] }
    })
    console.log("chat", chat)
    if (chat.length > 0) return res.status(200).json(chat)


    const newChat = new chatCollection({
      members: [firstId, secondId]
    })
    console.log("newChat", newChat)
    const saveNewChat = await newChat.save()
    console.log(saveNewChat)
    res.status(200).json(saveNewChat)
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findAllUsersChats = async (req, res) => {
  try {
    const chat = await chatCollection.find();
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const findUsersChats = async (req, res) => {
  try {
    const chat = await chatCollection.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findChat = async (req, res) => {
  try {
    const chat = await chatCollection.find({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createChat, findAllUsersChats, findUsersChats, findChat };
