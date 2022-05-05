const asyncHandler = require("express-async-handler");
const Users = require("../models/userModel");

//Get all users details
const getUsers = asyncHandler(async (req, res) => {
  const user = await Users.find();
  res.json(user);
});

//Fetch one user
const getUserById = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

//Update User Details
const updateUserDetails = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.image = req.body.image || user.image;
    user.phone = req.body.phone || user.phone;
    user.role = req.body.role || user.role;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      image: updatedUser.image,
      phone: updatedUser.phone,
      role: updatedUser.role,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

//Delete a user
const deleteUser = asyncHandler(async (req, res) => {
  const user = await Users.findByIdAndDelete(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
});

module.exports = { getUsers, getUserById, updateUserDetails, deleteUser };
