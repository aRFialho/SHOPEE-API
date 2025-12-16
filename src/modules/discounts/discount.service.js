const http = require("../../core/httpClient");

exports.createDiscount = async (data) => {
    const path = "/discount/create_discount";

    const response = await http.post(path, data);

    return response.data;
};

exports.addItemToDiscount = async (discountId, items) => {
    const path = "/discount/add_discount_item";

    const body = {
        discount_id: discountId,
        item_list: items
    };

    const response = await http.post(path, body);

    return response.data;
};