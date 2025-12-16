const api = require("../../core/httpClient");
const auth = require("../../core/shopeeAuth");class OrderService {async getOrdersByStatus(status) {
    const path = "/order/get_order_list";
    const authParams = auth(path);

    const { data } = await api.get(path, {
        params: {
            ...authParams,
            order_status: status,
            page_size: 100
        }
    });

    return data;
}

async getOrderDetail(orderSn) {
    const path = "/order/get_order_detail";
    const authParams = auth(path);

    const { data } = await api.get(path, {
        params: {
            ...authParams,
            order_sn_list: JSON.stringify([orderSn])
        }
    });

    return data;
}

async getOrderEscrow(orderSn) {
    const path = "/order/get_escrow_detail";
    const authParams = auth(path);

    const { data } = await api.get(path, {
        params: {
            ...authParams,
            order_sn: orderSn
        }
    });

    return data;
}
}module.exports = new OrderService();