const asyncHandler = require("express-async-handler");
const Panel = require("../models/adminPanelAssign");
const User = require("../models/userModel");

//Add Panel Members by admin
const addPanel = asyncHandler(async (req, res) => {
  const { name, description, panelHead, member1, member2, extraMember } =
    req.body;

  if (!name || !description || !panelHead || !member1 || !member2) {
    res.status(400);
    throw new Error("Please Fill all the fields!");
  }

  const panel = await Panel.create({
    name,
    description,
    panelHead,
    member1,
    member2,
    extraMember,
  });

  if (panel) {
    res.status(201).json({
      _id: panel._id,
      name: panel.name,
      description: panel.description,
      panelHead: panel.panelHead,
      member1: panel.member1,
      member2: panel.member2,
      extraMember: panel.extraMember,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

//Get all panels
const getAllPanels = asyncHandler(async (req, res) => {
  const panel = await Panel.find();
  res.json(panel);
});

//Fetch one panel
const getPanelById = asyncHandler(async (req, res) => {
  const panel = await Panel.findById(req.params.id);

  if (panel) {
    res.json(panel);
  } else {
    res.status(404).json({ message: "Panel not found" });
  }
});

//Update Panel Details
const updatePanelDetails = asyncHandler(async (req, res) => {
  const panel = await Panel.findById(req.params.id);

  if (panel) {
    panel.name = req.body.name || panel.name;
    panel.description = req.body.description || panel.description;
    panel.panelHead = req.body.panelHead || panel.panelHead;
    panel.member1 = req.body.member1 || panel.member1;
    panel.member2 = req.body.member2 || panel.member2;
    panel.extraMember = req.body.extraMember || panel.extraMember;

    const updatedPanel = await panel.save();

    res.json({
      _id: updatedPanel._id,
      name: updatedPanel.name,
      description: updatedPanel.description,
      panelHead: updatedPanel.panelHead,
      member1: updatedPanel.member1,
      member2: updatedPanel.member2,
      extraMember: updatedPanel.extraMember,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

//Delete a panel
const deletePanel = asyncHandler(async (req, res) => {
  const panel = await Panel.findByIdAndDelete(req.params.id);
  if (panel) {
    res.json(panel);
  } else {
    res.status(404).json({ message: "Panel Not Found" });
  }
});

//Get all staff members
const allStaff = asyncHandler(async (req, res) => {
  let role = "STAFF";
  const panel = await User.find({ role });
  res.json(panel);
});

//Get all Admins
const allAdmins = asyncHandler(async (req, res) => {
  let role = "ADMIN";
  const panel = await User.find({ role });
  res.json(panel);
});

//Get all Students
const allStudents = asyncHandler(async (req, res) => {
  let role = "STUDENT";
  const panel = await User.find({ role });
  res.json(panel);
});

module.exports = {
  addPanel,
  getAllPanels,
  getPanelById,
  updatePanelDetails,
  deletePanel,
  allStaff,
  allAdmins,
  allStudents,
};
