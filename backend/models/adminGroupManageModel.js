const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminGroupManageSchema = new Schema(
  {
    groupName: {
      type: String,
      required: true,
    },

    researchTopic: {
      type: String,
      required: true,
    },
    member2Id: {
      type: String,
      required: true,
    },
    member3Id: {
      type: String,
      required: true,
    },
    member4Id: {
      type: String,
      required: true,
    },
    extraMemberId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Templates_And_Documents",
  adminGroupManageSchema
);
