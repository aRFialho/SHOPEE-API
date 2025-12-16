express = require('express');
const router = express.Router();
const notifyController = require('./notifyController');

// Webhook público utilizado pela Shopee
router.post('/webhook', notifyController.receiveWebhook);

// Lista notificações armazenadas (útil para debug interno)
router.get('/', notifyController.listNotifications);

module.exports = router;
