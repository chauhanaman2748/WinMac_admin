const express = require('express');
const eventListController = require('../controller/eventList.controller');
const router = express.Router();

router.route('/').get(eventListController.getAllEvents);

router.route('/addEvent').post(eventListController.addEvent);

router.route('/updateEvent').post(eventListController.updateEvent);

router.route('/deleteEvent').post(eventListController.deleteEvent);

module.exports = router;