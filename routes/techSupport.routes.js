const express = require('express');
const techSupportController = require('../controller/techsupport.controller');
const router = express.Router();

router.route('/').get(techSupportController.getAllTickets);

router.route('/deleteTicket').post(techSupportController.deleteTicket);

module.exports = router;