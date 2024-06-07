import dotenv from "dotenv";
import { ENV } from "./constants.js";

dotenv.config();

export const config = {
  ENV: process.env.ENV || ENV.DEVELOPMENT,
  PORT: process.env.PORT || 8080,
  B24_HOOK: process.env.B24_HOOK || "https://www.test.com",
};