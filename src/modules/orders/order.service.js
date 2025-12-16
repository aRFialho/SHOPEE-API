const http = require("../../core/httpClient");

exports.getOrderList = async () => {
    const path = "/order/get_order_list";

    const params = {
        time_range_field: "create_time",
        time_from: Math.floor(Date.now() / 1000) - 86400 * 7, 
        time_to: Math.floor(Date.now() / 1000),
        page_size: 50,
    };

    const response = await http.get(path, params);

    return response.data;
};

exports.getOrderDetail = async (orderSnList) => {
    const path = "/order/get_order_detail";

    const params = {
        order_sn_list: orderSnList
    };

    const response = await http.get(path, params);

    return response.data;
};