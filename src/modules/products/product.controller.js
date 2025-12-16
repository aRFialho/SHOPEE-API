const service = require("./product.service");

class ProductController {

    async list(req, res) {
        try {
            const items = await service.getAll();
            res.json(items);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async detail(req, res) {
        try {
            const { id } = req.params;
            const item = await service.getItemDetail(id);
            res.json(item);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ProductController();