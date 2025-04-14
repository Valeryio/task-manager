
const router = require("express").Router();
const projectControllers = require("../controllers/projects.controllers");

router.get("/", projectControllers.getProjects);



module.exports = router;