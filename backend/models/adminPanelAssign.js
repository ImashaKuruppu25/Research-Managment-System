const mongoose = require("mongoose");

const panelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    panelHead: {
      type: String,
      required: true,
    },
    member1: {
      type: String,
      required: true,
    },
    member2: {
      type: String,
      required: true,
    },
    extraMember: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Panel", panelSchema);
