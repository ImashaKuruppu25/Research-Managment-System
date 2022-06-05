const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TopicRespondSchema = new Schema({
  topic: {
    type: String,
  },
  Discription: {
    type: String,
  },
  GroupNumber: {
    type: String,
  },
  Action: {
    type: String,
  }
});

const TopicRespond = mongoose.model("TopicRespond", TopicRespondSchema);

module.exports = TopicRespond;
