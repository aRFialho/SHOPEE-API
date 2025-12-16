const express = require("express");
const router = express.Router();
const controller = require("./product.controller");

router.get("/", controller.listProducts);
router.get("/:item_id", controller.productDetail);

module.exports = router;