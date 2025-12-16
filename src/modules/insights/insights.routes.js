const express = require('express');
const router = express.Router();
const insightsController = require('./insights.controller');

router.get('/product/:item_id', insightsController.getProductInsights);
router.get('/shop', insightsController.getShopInsights);

module.exports = router;