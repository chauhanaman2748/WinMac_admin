const express = require('express');
const bookController = require('../controller/eventBook.controller');
const router = express.Router();

router.route("/book").post(bookController.addEvent);

router.route("/removeEvent").post(bookController.removeEvent);

router.route("/myBookings").post(bookController.myEvent);

module.exports = router;