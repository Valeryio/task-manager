
const router = require("express").Router();
const userControllers = require("../controllers/users.controllers");

router.get("/", userControllers.getUser);
router.get("/:id", userControllers.getUser);
router.post("/add", userControllers.addUser);
router.put("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser);

module.exports = router;