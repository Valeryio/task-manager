
const router = require("express").Router();
const projectControllers = require("../controllers/projects.controllers");

router.get("/", projectControllers.getProject);
router.get("/:id", projectControllers.getProject);
router.post("/add", projectControllers.addProject);
router.put("/update/:id", projectControllers.updateProject);
router.delete("delete/:id", projectControllers.deleteProject);


module.exports = router;