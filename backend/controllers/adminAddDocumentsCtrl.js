const asyncHandler = require("express-async-handler");
const Documents = require("../models/adminAddDocumentsModel");

//Add Template Document by admin
const addDocument = asyncHandler(async (req, res) => {
  const { documentName, document } = req.body;

  if (!documentName || !document) {
    res.status(400);
    throw new Error("Please Fill all the fields!");
  }

  const documentExists = await Documents.findOne({ documentName });

  if (documentExists) {
    res.status(400).json({ message: "Document Already Exists!" });
  }

  const tempDoc = await Documents.create({
    documentName,
    document,
  });

  if (tempDoc) {
    res.status(201).json({
      _id: tempDoc._id,
      documentName: tempDoc.documentName,
      document: tempDoc.document,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

//Get all templates and documents
const getAllDocuments = asyncHandler(async (req, res) => {
  const tempDoc = await Documents.find();
  res.json(tempDoc);
});

//Fetch one document
const getDocumentById = asyncHandler(async (req, res) => {
  const tempDoc = await Documents.findById(req.params.id);

  if (tempDoc) {
    res.json(tempDoc);
  } else {
    res.status(404).json({ message: "Document not found" });
  }
});

//Delete a template or document
const deleteDocument = asyncHandler(async (req, res) => {
  const tempDoc = await Documents.findByIdAndDelete(req.params.id);
  if (tempDoc) {
    res.json(tempDoc);
  } else {
    res.status(404).json({ message: "Document Not Found" });
  }
});

module.exports = {
  addDocument,
  getAllDocuments,
  getDocumentById,
  deleteDocument,
};
