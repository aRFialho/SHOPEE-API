const router = require("express").Router();

router.use("/products", require("./modules/products/product.routes"));
router.use("/orders", require("./modules/orders/order.routes"));
router.use("/discounts", require("./modules/discounts/discount.routes"));
router.use("/campaigns", require("./modules/campaigns/campaign.routes"));
router.use("/flash", require("./modules/flashSale/flash.routes"));
router.use("/notifications", require("./modules/notifications/notify.routes"));
router.use("/insights", require("./modules/insights/insights.routes"));

module.exports = router;