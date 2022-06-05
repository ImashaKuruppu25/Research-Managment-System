const router = require("express").Router();
let TopicRespond = require("../models/PanelMemberTopicRespondModel");

router.route("/addRespond").post((req, res) => {
  const topic = req.body.topic;
  const Discription = req.body.Discription;
  const GroupNumber = req.body.GroupNumber;
  const Action = req.body.Action;

  const newTopicRespond = new TopicRespond({
    topic,
    Discription,
    GroupNumber,
    Action,
  });

  newTopicRespond
    .save()
    .then(() => {
      res.json("Respond Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get").get((req, res) => {
  TopicRespond.find()
    .then((topic) => {
      res.json(topic);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:GroupNumber").get(async (req, res) => {
  let ID = req.params.GroupNumber;

  TopicRespond.find({ GroupNumber: ID })
    .then((topicRespond) => res.send(topicRespond))
    .catch((err) => {
      console.log(err);
    });
});



module.exports = router;
