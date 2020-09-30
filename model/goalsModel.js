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
});

module.exports = mongoose.model("newgoal", GoalSchema);
