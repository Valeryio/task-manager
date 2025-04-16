
const router = require("express").Router();
const taskControllers = require("../controllers/tasks.controllers");

router.get("/", taskControllers.getTask);
router.get("/:id", taskControllers.getTask);
router.post("/add", taskControllers.addTask);
router.put("/update/:id", taskControllers.updateTask);
router.delete("/delete/:id", taskControllers.deleteTask);


module.exports = router;