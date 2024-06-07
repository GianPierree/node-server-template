import { Router } from "express";
import TestController from "../controllers/test.controller.js";

export default class TestRouter {
  constructor() {
    this.router = Router();
    this.testController = new TestController()
    this.path = "/test";
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(this.path, this.testController.getTest);
  }

  getRouter() {
    return this.router;
  }
}