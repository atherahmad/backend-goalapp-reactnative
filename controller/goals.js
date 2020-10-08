const Goal = require("../model/goalsModel");

exports.getGoals = async (req, res) => {
  console.log("you reached backend");
  Goal.find(async (err, doc) => {
    if (err) res.status(500).json({ status: "error", message: err });
    else {
      console.log("her is the doc to return ", doc);
      res.status(200).json({ status: "success", data: doc });
    }
  });
};

exports.newGoal = async (req, res) => {
  console.log(req.body.data, "data in back");

  const goal = new Goal({
    goalTitle: req.body.data.goalTitle,
    goalDetails: req.body.data.goalDetails,
    goalDate: req.body.data.goalDate,
  });

  await goal.save(async (err, doc) => {
    if (err) {
      res
        .status(500)
        .json({ status: "failed", message: "Unable to save your goal" });
    } else {
      Goal.find(async (err, doc) => {
        if (err) {
          res.status(500).json({ status: "error", message: err });
        } else {
          res.status(200).json({ status: "success", data: doc });
        }
      });
    }
  });
};

exports.deleteGoal = (req, res) => {
  console.log(req.body.id);
  Goal.findByIdAndDelete(req.body.id, (err, doc) => {
    if (err) res.status(500).json({ status: "error", message: err });
    else {
      res.status(200).json({ status: "success", data: doc });
    }
  });
};
