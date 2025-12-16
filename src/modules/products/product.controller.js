const service = require("./product.service");

class ProductController {

    async listProducts(req, res) {
        try {
            const items = await service.getProductList();
            res.json(items);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async productDetail(req, res) {
        try {
            const { item_id } = req.params;
            const item = await service.getProductDetail(item_id);
            res.json(item);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ProductController();