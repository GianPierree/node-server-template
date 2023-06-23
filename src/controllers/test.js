const { response, request } = require("express");
const { Api } = require("../utils/axios");

const getTest = (req = request, res = response) => {
    const result = {
        msg: "Test - GET",
    };
    res.status(200).json(result);
};

module.exports = {
    getTest,
};
