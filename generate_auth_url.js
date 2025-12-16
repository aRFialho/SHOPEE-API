const crypto = require("crypto");

// CONFIGURAÇÕES (use suas variáveis do .env)
const partnerId = 2012740;
const partnerKey = "shpk4c4b4e655a6b54536853704e48646470634d734258695765684b42624e43";
const redirect = "https://shopee-api-npxa.onrender.com";
const path = "/api/v2/shop/auth_partner";

// FUNÇÃO QUE GERA URL COMPLETA AUTOMÁTICA
function generateAuthUrl() {
    const timestamp = Math.floor(Date.now() / 1000);

    const baseString = partnerId + path + timestamp;

    const sign = crypto
        .createHmac("sha256", partnerKey)
        .update(baseString)
        .digest("hex");

    const url =
        "https://partner.shopeemobile.com/api/v2/shop/auth_partner" +
        `?partner_id=${partnerId}` +
        `&timestamp=${timestamp}` +
        `&sign=${sign}` +
        `&redirect=${encodeURIComponent(redirect)}`;

    console.log("\nURL DE AUTORIZAÇÃO:");
    console.log(url);
}

// GERA E MOSTRA A URL
generateAuthUrl();