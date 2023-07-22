const mongoose = require("mongoose");

const chatScheme = new mongoose.Schema({
  content: {
    type: String,
  },
  user: {
    type: String,
  },
  roomId: {
    type: String,
  },
});

const Chat = mongoose.model("Chat", chatScheme);

module.exports = Chat;
