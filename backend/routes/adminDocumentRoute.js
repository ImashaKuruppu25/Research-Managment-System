const router = require("express").Router();

const {
  addDocument,
  getAllDocuments,
  getDocumentById,
  deleteDocument,
} = require("../controllers/adminAddDocumentsCtrl");

router.post("/addDocument", addDocument);

router.get("/getAllDocuments", getAllDocuments);

router.get("/getOneDocument/:id", getDocumentById);

router.delete("/deleteDocument/:id", deleteDocument);

module.exports = router;
