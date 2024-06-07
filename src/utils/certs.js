import fs from "fs";
import { config } from "../config/index.js";
import { ENV } from "../config/constants.js";

const privateKey = (config.ENV === ENV.PRODUCTION) ? fs.readFileSync("./ssl/key.pem", "utf8"): '';
const certificate = (config.ENV === ENV.PRODUCTION) ? fs.readFileSync("./ssl/certificate.crt", "utf8"): '';

export const credentials = { key: privateKey, cert: certificate };
