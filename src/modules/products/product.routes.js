const router = require("express").Router();
const controller = require("./product.controller");

router.get("/", controller.list);
router.get("/:id", controller.detail);

module.exports = router;