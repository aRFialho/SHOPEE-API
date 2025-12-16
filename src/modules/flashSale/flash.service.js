const axios = require('axios');
const crypto = require('crypto');

class FlashSaleService {
    async getFlashSales() {
        return [];
    }

    async createFlashSale(data) {
        return data;
    }

    async updateFlashSale(id, data) {
        return { id, ...data };
    }

    async deleteFlashSale(id) {
        return;
    }

    generateHMAC(data) {
        return 'placeholder-hmac-token';
    }
}

module.exports = new FlashSaleService();