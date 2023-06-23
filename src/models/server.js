const express = require("express");
const cors = require("cors");
const https = require("https");
const config = require('../config')

class Server {
    constructor() {
        this.app = express();
        this.path = "/api/";

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.path, require('../routes/test'))
    }

    listen() {
        if(config.ENV === 'dev'){
            this.app.listen(config.PORT, () => {
                console.log(`Servidor HTTP está corriendo por el puerto ${config.PORT}`);
            });
        }else if(config.ENV === 'prod'){
            const { credentials } = require("../utils/certs")
            const httpsServer = https.createServer(credentials, this.app);
            
            httpsServer.listen(config.PORT, () => {
                console.log(`Servidor HTTPS está corriendo por el puerto ${config.PORT}`);
            });

        }
    }
}

module.exports = Server
