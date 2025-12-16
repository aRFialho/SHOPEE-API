const router = require("express").Router();
const controller = require("./order.controller");router.get("/status/:status", controller.listByStatus);
router.get("/detail/:sn", controller.detail);
router.get("/escrow/:sn", controller.escrow);module.exports = router;