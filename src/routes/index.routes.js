import express from "express";
import TestRouter from "./test.routes.js";

export default class RouterIndex {
  constructor() {
    this.router = express.Router();
    this.testRouter = new TestRouter();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.use('/', this.testRouter.getRouter());
    // Aquí puedes añadir más rutas si tienes otros routers
    // Ejemplo:
    // const anotherRouter = new AnotherRouter();
    // this.router.use('/another-path', anotherRouter.getRouter());
  }

  getRouter() {
    return this.router;
  }
}
