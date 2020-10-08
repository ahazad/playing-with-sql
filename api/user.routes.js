const router = require('express').Router();

const userController = require("../controller/user.controller");

router.post("/auth/user/login", userController.loginUser);

module.exports = router;