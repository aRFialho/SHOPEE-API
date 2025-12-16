const http = require("../../core/httpClient");

exports.getProductList = async () => {
    const path = "/product/get_item_list";

    const params = {
        offset: 0,
        page_size: 50
    };

    const response = await http.get(path, params);

    return response.data;
};

exports.getProductDetail = async (itemId) => {
    const path = "/product/get_item_base_info";

    const params = {
        item_id_list: [itemId]
    };

    const response = await http.get(path, params);

    return response.data;
};