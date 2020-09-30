const Goal = require("../model/goalsModel");
exports.getGoals = async (req, res) => {
  console.log("you reached backend");
  res
    .status(200)
    .json({ status: "success", data: { goal: "testing", id: "_id " } });
};
exports.newGoal = (req, res) => {
  console.log(req.body.data);
  res
    .status(200)
    .json({ status: "success", message: "Goal Added Successfully" });
};
exports.editGoal = (req, res) => {
  console.log(req.body.data);
  res
    .status(200)
    .json({ status: "success", message: "Goal editted Successfully" });
};
