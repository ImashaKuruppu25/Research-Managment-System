const asyncHandler = require("express-async-handler");
const Submissions = require("../models/adminSubmissions");

//Add submission

const addSubission = asyncHandler(async (req, res) => {
  const { groupName, topic, type, subDoc, date } = req.body;

  if (!groupName || !topic || !type || !subDoc) {
    res.status(400);
    throw new Error("Please Fill all the fields!");
  }

  const submittedDoc = await Submissions.create({
    groupName,
    topic,
    type,
    subDoc,
    date,
  });

  if (submittedDoc) {
    res.status(201).json({
      _id: submittedDoc._id,
      groupName: submittedDoc.groupName,
      topic: submittedDoc.topic,
      type: submittedDoc.type,
      subDoc: submittedDoc.subDoc,
      date: submittedDoc.date,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

//Get all submissions
const allsubmissions = asyncHandler(async (req, res) => {
  const submittedDoc = await Submissions.find();
  res.json(submittedDoc);
});

//Fetch one submission
const getSubmissiontById = asyncHandler(async (req, res) => {
  const submittedDoc = await Submissions.findById(req.params.id);

  if (submittedDoc) {
    res.json(submittedDoc);
  } else {
    res.status(404).json({ message: "Submission not found" });
  }
});

module.exports = {
  addSubission,
  allsubmissions,
  getSubmissiontById,
};
