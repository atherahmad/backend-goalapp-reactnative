const Goal = require("../model/goalsModel");

exports.getGoals = async (req, res) => {
  console.log("you reached backend");
  res
    .status(200)
    .json({ status: "success", data: { goal: "testing", id: "_id " } });
};

exports.newGoal = async (req, res) => {
  console.log(req.body, "data in back");

  const goal = new Goal({ goalTitle: req.body.value });

  await goal.save(async (err, doc) => {
    if (err) res.status(500).json({ status: "error", message: err });
    else {
      Goal.find(async (err, doc) => {
        if (err) res.status(500).json({ status: "error", message: err });
        else {
          console.log(doc);
          res.status(200).json({ status: "success", data: doc });
        }
      });
    }
  });
};

exports.editGoal = (req, res) => {
  console.log(req.body.data);
  res
    .status(200)
    .json({ status: "success", message: "Goal editted Successfully" });
};
