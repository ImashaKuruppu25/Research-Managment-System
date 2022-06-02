const asyncHandler = require("express-async-handler");
const Users = require("../models/userModel");
const Groups = require("../models/adminGroupManageModel");
const Panels = require("../models/adminPanelAssign");

//Get all Students count
const allUsers = asyncHandler(async (req, res) => {
  const count = await Users.count();

  res.status(200).json({ message: `User Count is : ${count}` });
});

//Get all Students count
const allStudents = asyncHandler(async (req, res) => {
  let role = "STUDENT";

  const count = await Users.count({ role });

  res.status(200).json({ message: `Student Count is : ${count}` });
});

//Get all STAFF count
const allStaff = asyncHandler(async (req, res) => {
  let role = "STAFF";

  const count = await Users.count({ role });

  res.status(200).json({ message: `STAFF Count is : ${count}` });
});

//Get all Groups count
const allGroups = asyncHandler(async (req, res) => {
  const count = await Groups.count();

  res.status(200).json({ message: `Group Count is : ${count}` });
});

//Get all Panel count
const allPanels = asyncHandler(async (req, res) => {
  const count = await Panels.count();

  res.status(200).json({ message: `Panel Count is : ${count}` });
});

module.exports = {
  allStudents,
  allUsers,
  allGroups,
  allPanels,
  allStaff,
};
