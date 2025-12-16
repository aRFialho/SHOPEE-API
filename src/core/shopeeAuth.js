require("dotenv").config();
console.log("ENV DEBUG:", process.env.SHOPEE_PARTNER_ID, process.env.SHOPEE_PARTNER_KEY, process.env.SHOPEE_SHOP_ID);
const crypto = require("crypto");

class ShopeeAuthV2 {
    constructor() {
        this.partnerId = Number(process.env.SHOPEE_PARTNER_ID);
        this.partnerKey = process.env.SHOPEE_PARTNER_KEY;
        this.shopId = Number(process.env.SHOPEE_SHOP_ID);
        this.baseUrl = process.env.SHOPEE_BASE_URL;
    }

    timestamp() {
        return Math.floor(Date.now() / 1000);
    }

    generateSignature(path, timestamp, accessToken = "", shopId = this.shopId) {
        const baseString =
            this.partnerId +
            path +
            timestamp +
            (accessToken || "") +
            (shopId || "");

        return crypto
            .createHmac("sha256", this.partnerKey)
            .update(baseString)
            .digest("hex");
    }

    buildUrl(path, timestamp, sign, accessToken = "", shopId = this.shopId) {
        const url = new URL(this.baseUrl + path);

        url.searchParams.set("partner_id", this.partnerId);
        url.searchParams.set("timestamp", timestamp);
        url.searchParams.set("sign", sign);

        if (shopId) url.searchParams.set("shop_id", shopId);
        if (accessToken) url.searchParams.set("access_token", accessToken);

        return url.toString();
    }

    signRequest(path, accessToken = "", shopId = this.shopId) {
        const timestamp = this.timestamp();
        const signature = this.generateSignature(path, timestamp, accessToken, shopId);
        const url = this.buildUrl(path, timestamp, signature, accessToken, shopId);

        return {
            url,
            timestamp,
            signature
        };
    }
}

module.exports = new ShopeeAuthV2();