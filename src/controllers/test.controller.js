import { response, request } from "express";

export default class TestController {
  constructor() {
    // Puedes inicializar propiedades si es necesario
  }

  getTest(req = request, res = response) {
    const result = {
      msg: "Test - GET",
    };
    res.status(200).json(result);
  }
}
