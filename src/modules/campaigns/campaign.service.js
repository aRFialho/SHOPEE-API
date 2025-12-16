const http = require("../../core/httpClient");

exports.getCampaignList = async () => {
    const path = "/campaign/get_campaign_list";

    const params = {
        page_size: 50
    };

    const response = await http.get(path, params);

    return response.data;
};