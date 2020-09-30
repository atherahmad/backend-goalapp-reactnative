const router = require("express").Router();
const goals = require("../controller/goals");

router.get("/getgoals", goals.getGoals);
router.post("/newgoal", goals.newGoal);
router.put("/editgoal", goals.editGoal);

module.exports = router;
