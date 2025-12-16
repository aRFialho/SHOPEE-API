const http = require("../../core/httpClient");

exports.getProductMetrics = async (itemId) => {
    const path = "/product/get_item_base_info";

    const params = {
        item_id_list: [itemId]
    };

    const response = await http.get(path, params);

    return response.data;
};