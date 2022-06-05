const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestTopicSchema = new Schema({
  topic: {
    type: String,
  },
  Discription: {
    type: String,
  },
  GroupNumber: {
    type: String,
  },
});

const RequestTopic = mongoose.model("RequestTopics", RequestTopicSchema);

module.exports = RequestTopic;
