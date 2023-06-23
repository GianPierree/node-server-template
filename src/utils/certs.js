const fs = require("fs");

const privateKey = fs.readFileSync("./ssl/key.pem", "utf8");
const certificate = fs.readFileSync("./ssl/certificate.crt", "utf8");

const credentials = { key: privateKey, cert: certificate };

module.exports = { credentials };
