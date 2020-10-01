const router = require("express").Router();
const goals = require("../controller/goals");

router.get("/getgoals", goals.getGoals);
router.post("/newgoal", goals.newGoal);
router.post("/deletegoal", goals.deleteGoal);

module.exports = router;
