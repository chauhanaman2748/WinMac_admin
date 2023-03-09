const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();

router.route('/attendance').post(userController.getAllData);
router.route('/registerUser').post(userController.registerUser);

module.exports = router;