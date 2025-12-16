const crypto = require("crypto");
require("dotenv").config();

function generateAuth(path, params = {}) {
    const timestamp = Math.floor(Date.now() / 1000);

    const partnerId = process.env.SHOPPEE_PARTNER_ID;
    const partnerKey = process.env.SHOPPEE_PARTNER_KEY;
    const shopId = process.env.SHOPPEE_SHOP_ID;

    const baseString = `${partnerId}${path}${timestamp}${shopId}`;

    const sign = crypto
        .createHmac("sha256", partnerKey)
        .update(baseString)
        .digest("hex");

    return {
        timestamp,
        sign,
        partner_id: partnerId,
        shop_id: shopId
    };
}

module.exports = generateAuth;