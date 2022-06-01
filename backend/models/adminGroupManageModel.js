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
    member1Id: {
      type: Object,
      required: true,
    },
    member2Id: {
      type: Object,
      required: true,
    },
    member3Id: {
      type: Object,
      required: true,
    },
    member4Id: {
      type: Object,
      required: true,
    },
    extraMemberId: {
      type: Object,
      required: false,
    },
    assignedSupervisor: {
      type: Object,
      required: false,
      // default: "🛑 Not Assigned",
    },
    assignedCoSupervisor: {
      type: Object,
      required: false,
      // default: "🛑 Not Assigned",
    },
    assignedPanel: {
      type: Object,
      required: false,
      // default: "🛑 Not Assigned",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Group_Details", adminGroupManageSchema);
