const asyncHandler = require("express-async-handler");
const Group = require("../models/adminGroupManageModel");

//Get all groups
const getAllGroups = asyncHandler(async (req, res) => {
  const group = await Group.find();
  res.json(group);
});

//Fetch one group
const getGroupById = asyncHandler(async (req, res) => {
  const group = await Group.findById(req.params.id);

  if (group) {
    res.json(group);
  } else {
    res.status(404).json({ message: "Group not found" });
  }
});

//Update group Details
const updateGroupDetails = asyncHandler(async (req, res) => {
  const group = await Group.findById(req.params.id);

  if (group) {
    group.groupName = req.body.groupName || group.groupName;
    group.researchTopic = req.body.researchTopic || group.researchTopic;
    group.member1Id = req.body.member1Id || group.member1Id;
    group.member2Id = req.body.member2Id || group.member2Id;
    group.member3Id = req.body.member3Id || group.member3Id;
    group.member4Id = req.body.member4Id || group.member4Id;
    group.extraMemberId = req.body.extraMemberId || group.extraMemberId;
    group.assignedSupervisor =
      req.body.assignedSupervisor || group.assignedSupervisor;
    group.assignedCoSupervisor =
      req.body.assignedCoSupervisor || group.assignedCoSupervisor;
    group.assignedPanel = req.body.assignedPanel || group.assignedPanel;

    const updatedGroup = await group.save();

    res.json({
      _id: updatedGroup._id,
      groupName: updatedGroup.groupName,
      researchTopic: updatedGroup.researchTopic,
      member1Id: updatedGroup.member1Id,
      member2Id: updatedGroup.member2Id,
      member3Id: updatedGroup.member3Id,
      member4Id: updatedGroup.member4Id,
      extraMemberId: updatedGroup.extraMemberId,
      assignedSupervisor: updatedGroup.assignedSupervisor,
      assignedCoSupervisor: updatedGroup.assignedCoSupervisor,
      assignedPanel: updatedGroup.assignedPanel,
    });
  } else {
    res.status(404);
    throw new Error("Group Not Found");
  }
});

//Delete a group
const deleteGroup = asyncHandler(async (req, res) => {
  const group = await Group.findByIdAndDelete(req.params.id);
  if (group) {
    res.json(group);
  } else {
    res.status(404).json({ message: "Group Not Found" });
  }
});

module.exports = {
  getAllGroups,
  getGroupById,
  updateGroupDetails,
  deleteGroup,
};
