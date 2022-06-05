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
      type: Object,
      required: true,
    },
    member1: {
      type: Object,
      required: true,
    },
    member2: {
      type: Object,
      required: true,
    },
    extraMember: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Panel", panelSchema);
