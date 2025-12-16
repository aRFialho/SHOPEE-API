const api = require("../../core/httpClient");
const auth = require("../../core/shopeeAuth");

class ProductService {

    async getAll() {
        const path = "/product/get_item_list";
        const authParams = auth(path);

        const { data } = await api.get(path, {
            params: {
                ...authParams,
                page_size: 100
            }
        });

        return data;
    }

    async getItemDetail(itemId) {
        const path = "/product/get_item_base_info";
        const authParams = auth(path);

        const { data } = await api.get(path, {
            params: {
                ...authParams,
                item_id_list: JSON.stringify([itemId])
            }
        });

        return data;
    }

    async updatePrice(itemId, price) {
        const path = "/product/update_price";
        const authParams = auth(path);

        const { data } = await api.post(path, {
            item_id: itemId,
            price
        }, { params: authParams });

        return data;
    }
}

module.exports = new ProductService();