const { chatCollection, messageCollection } = require("../collections/collection");

const createChat = async (req, res) => {
  const { receiver ,sender } = req.body;
  try {

    const chat = await chatCollection.find({
      members: { $all: [receiver, sender] }
    })
    if (chat.length > 0) return res.status(200).json(chat)


    const newChat = new chatCollection({
      members: [receiver, sender]
    })
    
    const saveNewChat = await newChat.save();
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
      members: { $all: [receiver, sender] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteChat = async (req, res) => {
  const chatId = req.params.chatId
  console.log('delete chat')


  try {
    chatCollection.findByIdAndDelete(chatId, (error, deletedChat) => {
      if (error) {
        res.status(500).json({ message: error.message });
      } else if (deletedChat) {
        res.status(200).json(deletedChat);
      } else {
        res.status(500).json({ message: 'Document not found.' });
      }
    });
    messageCollection.deleteMany({ chatId: chatId }, (err) => { });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createChat, findAllUsersChats, findUsersChats, findChat, deleteChat };
