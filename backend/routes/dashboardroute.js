const router = require("express").Router();
const {
  allStudents,
  allUsers,
  allGroups,
  allPanels,
  allStaff,
} = require("../controllers/adminDashboard");

router.get("/allUsersCount", allUsers);

router.get("/allStudentsCount", allStudents);

router.get("/allGroupsCount", allGroups);

router.get("/allPanelsCount", allPanels);

router.get("/allStaffCount", allStaff);

module.exports = router;
