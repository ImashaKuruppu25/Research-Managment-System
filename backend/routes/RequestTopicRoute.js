const router = require("express").Router();
let RejisterTopic = require("../models/RequestTopicModel")

router.route("/addRequestTopic").post((req, res) => {
  const topic = req.body.topic;
  const Discription = req.body.Discription;
  const GroupNumber = req.body.GroupNumber;



  const newRejisterTopic = new RejisterTopic({
    topic,
    Discription,
    GroupNumber,
  });

  newRejisterTopic
    .save()
    .then(() => {
      res.json("Topic Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get").get((req, res) => {
  RejisterTopic.find()
    .then((topic) => {
      res.json(topic);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/delete/:GroupNumber").delete(async (req, res) => {
  let Dnumber = req.params.GroupNumber;

  RejisterTopic.findOneAndDelete({ GroupNumber: Dnumber })
    .then((topicdelete) => res.send(topicdelete))
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;