const axios = require("axios");
const shopeeAuth = require("./shopeeAuth");

class HttpClient {

    async get(path, params = {}, accessToken = "") {
        const { url } = shopeeAuth.signRequest(path, accessToken);

        return axios.get(url, {
            params
        });
    }

    async post(path, body = {}, accessToken = "") {
        const { url } = shopeeAuth.signRequest(path, accessToken);

        return axios.post(url, body, {
            headers: { "Content-Type": "application/json" }
        });
    }
}

module.exports = new HttpClient();