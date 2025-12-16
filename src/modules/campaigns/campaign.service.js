const axios = require('axios');class CampaignService {
async listCampaigns() {
const hmac = this.generateHMAC('list');
const response = await axios.get(
'https://partner.shopeemobile.com/api/v2/product/get_item_list',
{ headers: { 'Authorization': hmac } }
);
return response.data;
}async createCampaign(data) {
    const hmac = this.generateHMAC('create', data);
    const response = await axios.post(
        'https://partner.shopeemobile.com/api/v2/campaign/create',
        data,
        { headers: { 'Authorization': hmac } }
    );
    return response.data;
}

async getCampaign(id) {
    const hmac = this.generateHMAC('get', { id });
    const response = await axios.get(
        `https://partner.shopeemobile.com/api/v2/campaign/get/${id}`,
        { headers: { 'Authorization': hmac } }
    );
    return response.data;
}

generateHMAC(action, data = {}) {
    // Placeholder para autenticação Shopee HMAC
    return 'placeholder_hmac_' + action;
}
}module.exports = new CampaignService();