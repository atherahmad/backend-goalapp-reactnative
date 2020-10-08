const mongoose = require("mongoose");
const GoalSchema = new mongoose.Schema({
  goalTitle: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
  goalDetails: {
    type: String,
    required: true,
  },
  goalDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("newgoal", GoalSchema);
