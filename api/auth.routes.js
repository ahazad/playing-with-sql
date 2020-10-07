const router = require('express').Router();

const authController = require('../controller/auth.controller');

router.post('/auth/admin/login', authController.postAdminLogin);

module.exports = router;