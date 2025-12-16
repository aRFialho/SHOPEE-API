const http = require("../../core/httpClient");

exports.getFlashSales = async () => {
    const path = "/discount/get_discount_list";

    const params = { page_size: 50 };

    const response = await http.get(path, params);

    return response.data;
};
