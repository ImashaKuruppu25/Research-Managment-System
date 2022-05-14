const {
  getAllGroups,
  getGroupById,
  updateGroupDetails,
  deleteGroup,
} = require("../controllers/adminGroupManageCtrl");

const router = require("express").Router();

router.get("/getAllGroups", getAllGroups);

router.get("/getOneGroup/:id", getGroupById);

router.patch("/updateGroup/:id", updateGroupDetails);

router.delete("/deleteGroup/:id", deleteGroup);

module.exports = router;
