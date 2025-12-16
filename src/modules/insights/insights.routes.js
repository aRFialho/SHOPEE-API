express = require('express');
const router = express.Router();
const insightsController = require('./insightsController');

router.get('/product/:item_id', insightsController.getProductInsights);
router.get('/shop', insightsController.getShopInsights);

module.exports = router;