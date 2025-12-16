const crypto = require("crypto");
const axios = require("axios");

// CONFIGS — substitua pelo seu .env local
const partnerId = 2012740;
const partnerKey = "shpk4c4b4e655a6b54536853704e48646470634d734258695765684b42624e43";
const code = "4d726d6148617656524f50726a516675";
const shopId = 348584331;

const path = "/api/v2/auth/token/get";

// gera timestamp em tempo real
const timestamp = Math.floor(Date.now() / 1000);

// monta base string
const baseString = partnerId + path + timestamp;

// gera assinatura
const sign = crypto
    .createHmac("sha256", partnerKey)
    .update(baseString)
    .digest("hex");

// request body exigido pela Shopee
const body = {
    code,
    shop_id: shopId,
    partner_id: partnerId
};

async function run() {
    const url =
        "https://partner.shopeemobile.com" +
        `${path}?partner_id=${partnerId}&timestamp=${timestamp}&sign=${sign}`;

    try {
        const response = await axios.post(url, body);
        console.log("TOKEN RESPONSE:");
        console.log(response.data);
    } catch (err) {
        console.error("ERROR:");
        console.error(err.response?.data || err);
    }
}

run();