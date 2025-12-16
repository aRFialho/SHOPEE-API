const campaignService = require('./campaign.service');class CampaignController {
async list(req, res) {
try {
const campaigns = await campaignService.listCampaigns();
res.json(campaigns);
} catch (error) {
res.status(500).json({ error: error.message });
}
}async create(req, res) {
    try {
        const campaign = await campaignService.createCampaign(req.body);
        res.status(201).json(campaign);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async get(req, res) {
    try {
        const campaign = await campaignService.getCampaign(req.params.id);
        res.json(campaign);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
}module.exports = new CampaignController();