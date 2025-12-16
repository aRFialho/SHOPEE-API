const express = require('express');
const router = express.Router();
const notifyController = require('./notify.controller');

router.post('/webhook', notifyController.receiveWebhook);
router.get('/', notifyController.listNotifications);

module.exports = router;