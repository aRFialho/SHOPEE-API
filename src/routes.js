const express = require("express");
const router = express.Router();

// Importação dos módulos
const productRoutes = require("./modules/products/product.routes");
const orderRoutes = require("./modules/orders/order.routes");
const discountRoutes = require("./modules/discounts/discount.routes");
const campaignRoutes = require("./modules/campaigns/campaign.routes");
const flashSaleRoutes = require("./modules/flashSale/flashSale.routes");
const notifyRoutes = require("./modules/notifications/notify.routes");
const insightsRoutes = require("./modules/insights/insights.routes");

// Roteamento principal da API
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/discounts", discountRoutes);
router.use("/campaigns", campaignRoutes);
router.use("/flashsale", flashSaleRoutes);
router.use("/notifications", notifyRoutes);
router.use("/insights", insightsRoutes);

module.exports = router;