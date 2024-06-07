import express from "express";
import cors from "cors";
import https from "https";
import { config } from "../config/index.js";
import { credentials } from "../utils/certs.js"; 
import RouterIndex from "../routes/index.routes.js";
import { ENV } from "../config/constants.js";

export default class Server {
  constructor() {
    this.app = express();
    this.path = "/api/";
    this.routerIndex = new RouterIndex()

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.path, this.routerIndex.getRouter());
  }

  listen() {
    if (config.ENV === ENV.DEVELOPMENT) {
      this.app.listen(config.PORT, () => {
        console.log(
          `Servidor HTTP está corriendo por el puerto ${config.PORT}`
        );
      });
    } else if (config.ENV === ENV.PRODUCTION) {

      const httpsServer = https.createServer(credentials, this.app);

      httpsServer.listen(config.PORT, () => {
        console.log(
          `Servidor HTTPS está corriendo por el puerto ${config.PORT}`
        );
      });
    }
  }
}
