const crypto = require("crypto");

class ShopeeAuth {
    constructor() {
        this.partnerId = process.env.SHOPEE_PARTNER_ID;
        this.partnerKey = process.env.SHOPEE_PARTNER_KEY;
        this.shopId = process.env.SHOPEE_SHOP_ID;
    }

    generateTimestamp() {
        return Math.floor(Date.now() / 1000);
    }

    generateSignature(path, timestamp, accessToken = "", shopId = this.shopId) {
        const baseString = `${this.partnerId}${path}${timestamp}${accessToken}${shopId}`;

        return crypto
            .createHmac("sha256", this.partnerKey)
            .update(baseString)
            .digest("hex");
    }

    getAuthHeaders(path, accessToken = "", shopId = this.shopId) {
        const timestamp = this.generateTimestamp();

        const sign = this.generateSignature(
            path,
            timestamp,
            accessToken,
            shopId
        );

        return {
            "Content-Type": "application/json",
            "Authorization": sign,
            "X-Shopee-Timestamp": timestamp,
            "X-Shopee-Partner-Id": this.partnerId,
            "X-Shopee-Shop-Id": shopId,
            "X-Shopee-Access-Token": accessToken
        };
    }
}

module.exports = new ShopeeAuth();