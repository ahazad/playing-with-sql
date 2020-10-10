const router = require('express').Router();
const passport = require('passport');

const userController = require("../controller/user.controller");

router.post('/result',  passport.authenticate('jwt', {session: false}), userController.getResult);

module.exports = router;