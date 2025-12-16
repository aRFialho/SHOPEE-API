const router = require("express").Router();
const controller = require("./discount.controller");

router.get("/", controller.list.bind(controller));
router.get("/:id", controller.detail.bind(controller));
router.post("/", controller.create.bind(controller));
router.post("/add", controller.addProduct.bind(controller));

module.exports = router;