const router = require("express").Router();
const {
  addPanel,
  getAllPanels,
  getPanelById,
  updatePanelDetails,
  deletePanel,
  allStaff,
  allAdmins,
  allStudents,
} = require("../controllers/adminPanelAssign");

router.post("/addPanel", addPanel);

router.get("/getAllPanels", getAllPanels);

router.get("/getOnePanel/:id", getPanelById);

router.patch("/updatePanel/:id", updatePanelDetails);

router.delete("/deletePanel/:id", deletePanel);

router.get("/allStaff", allStaff);

router.get("/allAdmins", allAdmins);

router.get("/allStudents", allStudents);

module.exports = router;
