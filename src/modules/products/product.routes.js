const express = require("express");
const router = express.Router();
const productController = require("./product.controller");

router.get("/", productController.listProducts);
router.get("/:item_id", productController.productDetail);

module.exports = router;