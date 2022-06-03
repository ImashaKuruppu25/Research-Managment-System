const {
  addSubission,
  allsubmissions,
  getSubmissiontById,
} = require("../controllers/adminSubmissionsCtrl");

const router = require("express").Router();

router.post("/addSubmission", addSubission);

router.get("/allSubmissions", allsubmissions);

router.get("/getSubmissiontById/:id", getSubmissiontById);

module.exports = router;
