const mongoose = require("mongoose");

const markingSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    doc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Marking_Scheme", markingSchema);
