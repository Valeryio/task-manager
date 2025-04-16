
const router = require("express").Router();
const taskControllers = require("../controllers/tasks.controllers");

router.get("/", taskControllers.getTask);
router.get("/:id", taskControllers.getTask);
router.post("/add", taskControllers.addTask);
router.put("/id", taskControllers.updateTask);
router.delete("/id", taskControllers.deleteTask);


module.exports = router;