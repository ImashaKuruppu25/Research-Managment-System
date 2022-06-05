const router = require("express").Router();
let Panel = require("../models/PanelMembersModel");

router.route("/addPanel").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const panelHead = req.body.panelHead;
  const member1 = req.body.member1;
  const member2 = req.body.member2;
  const extraMember = req.body.extraMember;

  const newPanel = new Panel({
    name,
    description,
    panelHead,
    member1,
    member2,
    extraMember
  });

  newPanel
    .save()
    .then(() => {
      res.json("panel Members Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:panelHead").get(async (req, res) => {
  let ID = req.params.panelHead;

  Panel.find({ panelHead: ID })
    .then((panel) => res.send(panel))
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;