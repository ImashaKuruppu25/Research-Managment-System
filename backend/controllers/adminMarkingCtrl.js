const asyncHandler = require("express-async-handler");
const Marking = require("../models/adminMarkingSchemesModel");

//Add Marking Scheme by admin
const addMarkingScheme = asyncHandler(async (req, res) => {
  const { topic, description, doc } = req.body;

  if (!topic || !description || !doc) {
    res.status(400);
    throw new Error("Please Fill all the fields!");
  }

  const marking = await Marking.create({
    topic,
    description,
    doc,
  });

  if (marking) {
    res.status(201).json({
      _id: marking._id,
      topic: marking.topic,
      description: marking.description,
      doc: marking.doc,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

//Get all marking schemes
const getAllMarkings = asyncHandler(async (req, res) => {
  const marking = await Marking.find();
  res.json(marking);
});

//Fetch one marking scheme
const getMarkingById = asyncHandler(async (req, res) => {
  const marking = await Marking.findById(req.params.id);

  if (marking) {
    res.json(marking);
  } else {
    res.status(404).json({ message: "Marking Scheme not found" });
  }
});

//Delete a marking scheme
const deleteMarkingScheme = asyncHandler(async (req, res) => {
  const marking = await Marking.findByIdAndDelete(req.params.id);
  if (marking) {
    res.json(marking);
  } else {
    res.status(404).json({ message: "Marking Scheme Not Found" });
  }
});

module.exports = {
  addMarkingScheme,
  getAllMarkings,
  getMarkingById,
  deleteMarkingScheme,
};
