
const router = require("express").Router();
const taskControllers = require("../controllers/tasks.controllers");

router.get("/", taskControllers.getTasks);




module.exports = router;