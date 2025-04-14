
const router = require("express").Router();
const userControllers = require("../controllers/users.controllers");

router.get("/", userControllers.getUser);
// router.post("/", );


module.exports = router;