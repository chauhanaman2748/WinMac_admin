const express = require('express');
const eventListController = require('../controller/eventList.controller');
const router = express.Router();

router.route('/').get(eventListController.getAllEvents);

module.exports = router;