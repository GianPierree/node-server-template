const axios = require("axios");
const config = require("../config/index");

const api = axios.create({
    baseURL: config.B24_HOOK,
});

module.exports = { api };
