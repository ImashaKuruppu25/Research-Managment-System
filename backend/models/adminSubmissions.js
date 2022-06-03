const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const submissionsSchema = new Schema({
  groupName: {
    type: String,
    required: true,
  },

  topic: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  subDoc: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("students_submissions", submissionsSchema);
