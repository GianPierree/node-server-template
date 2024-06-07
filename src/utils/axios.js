import axios from "axios";
import config from "../config/index.js";

export default class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: config.B24_HOOK,
    });
  }

  // Puedes agregar métodos adicionales si es necesario
  getInstance() {
    return this.api;
  }
}
