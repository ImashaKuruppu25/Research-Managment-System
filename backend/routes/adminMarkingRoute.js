const router = require("express").Router();
const {
  addMarkingScheme,
  getAllMarkings,
  getMarkingById,
  deleteMarkingScheme,
} = require("../controllers/adminMarkingCtrl");

router.post("/addMarkingScheme", addMarkingScheme);

router.get("/getAllMarkings", getAllMarkings);

router.get("/getOneMarking/:id", getMarkingById);

router.delete("/deleteMarking/:id", deleteMarkingScheme);

module.exports = router;
