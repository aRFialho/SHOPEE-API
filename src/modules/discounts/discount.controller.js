const service = require("./discount.service");

class DiscountController {

    async list(req, res) {
        try {
            const data = await service.listDiscounts();
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async detail(req, res) {
        try {
            const { id } = req.params;
            const data = await service.getDiscountDetail(id);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async create(req, res) {
        try {
            const { name, start_time, end_time } = req.body;
            const data = await service.createDiscount(name, start_time, end_time);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async addProduct(req, res) {
        try {
            const { discount_id, item_id, model_id, price } = req.body;
            const data = await service.addProductToDiscount(discount_id, item_id, model_id, price);
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new DiscountController();