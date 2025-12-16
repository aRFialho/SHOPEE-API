const api = require("../../core/httpClient");
const auth = require("../../core/shopeeAuth");

class DiscountService {

    async listDiscounts() {
        const path = "/discount/get_discount_list";
        const authParams = auth(path);

        const { data } = await api.get(path, {
            params: {
                ...authParams,
                page_no: 1,
                page_size: 100
            }
        });

        return data;
    }

    async getDiscountDetail(discountId) {
        const path = "/discount/get_discount_detail";
        const authParams = auth(path);

        const { data } = await api.get(path, {
            params: {
                ...authParams,
                discount_id: discountId
            }
        });

        return data;
    }

    async createDiscount(discountName, startTime, endTime) {
        const path = "/discount/add_discount";
        const authParams = auth(path);

        const body = {
            discount_name: discountName,
            start_time: startTime,
            end_time: endTime
        };

        const { data } = await api.post(path, body, { params: authParams });
        return data;
    }

    async addProductToDiscount(discountId, itemId, modelId, discountPrice) {
        const path = "/discount/add_discount_item";
        const authParams = auth(path);

        const body = {
            discount_id: discountId,
            items: [
                {
                    item_id: itemId,
                    model_id: modelId,
                    promotion_price: discountPrice
                }
            ]
        };

        const { data } = await api.post(path, body, { params: authParams });
        return data;
    }
}

module.exports = new DiscountService();