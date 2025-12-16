
const express = require('express');
const router = express.Router();
const flashSaleController = require('./flashSaleController');

router.get('/', flashSaleController.listFlashSales);
router.post('/', flashSaleController.createFlashSale);
router.put('/:id', flashSaleController.updateFlashSale);
router.delete('/:id', flashSaleController.deleteFlashSale);

module.exports = router;