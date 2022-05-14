const router = require("express").Router();
const {
  getUsers,
  getUserById,
  updateUserDetails,
  deleteUser,
} = require("../controllers/adminUserCtrl");

router.get("/adminGetAllUsers", getUsers);

router.get("/adminGetOneUser/:id", getUserById);

router.patch("/adminUpdateUser/:id", updateUserDetails);

router.delete("/adminDeleteUser/:id", deleteUser);

module.exports = router;
