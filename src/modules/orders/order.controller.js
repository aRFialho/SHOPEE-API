const service = require("./order.service");class OrderController {async listByStatus(req, res) {
    try {
        const { status } = req.params;
        const items = await service.getOrdersByStatus(status);
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async detail(req, res) {
    try {
        const { sn } = req.params;
        const item = await service.getOrderDetail(sn);
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async escrow(req, res) {
    try {
        const { sn } = req.params;
        const item = await service.getOrderEscrow(sn);
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
}module.exports = new OrderController();