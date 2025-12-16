const axios = require("axios");
const shopeeAuth = require("./shopeeAuth");

class HttpClient {
    async get(path, params = {}, accessToken = "") {
        const url = process.env.SHOPEE_BASE_URL + path;

        const headers = shopeeAuth.getAuthHeaders(path, accessToken);

        return axios.get(url, { params, headers });
    }

    async post(path, body = {}, accessToken = "") {
        const url = process.env.SHOPEE_BASE_URL + path;

        const headers = shopeeAuth.getAuthHeaders(path, accessToken);

        return axios.post(url, body, { headers });
    }
}

module.exports = new HttpClient();