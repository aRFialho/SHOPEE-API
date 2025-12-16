const insightsService = require('./insights.service');

class InsightsController {
    async getProductInsights(req, res) {
        try {
            const { item_id } = req.params;
            const insights = await insightsService.getProductInsights(item_id);
            res.status(200).json(insights);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getShopInsights(req, res) {
        try {
            const insights = await insightsService.getShopInsights();
            res.status(200).json(insights);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new InsightsController();