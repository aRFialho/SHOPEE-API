const express = require('express');
const campaignController = require('./campaign.controller');const router = express.Router();router.get('/', campaignController.list);
router.get('/:id', campaignController.get);
router.post('/', campaignController.create);module.exports = router;