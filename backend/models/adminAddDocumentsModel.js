const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminAddDocumentsSchema = new Schema({
  documentName: {
    type: String,
    required: true,
  },

  document: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Templates_And_Documents",
  adminAddDocumentsSchema
);
