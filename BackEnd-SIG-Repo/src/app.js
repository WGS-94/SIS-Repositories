require('dotenv').config()
import express  from "express";
import cors from 'cors';
import routes from "./routes";
import serv from 'http';
import io from 'socket.io';

require('./database');

const corsOptions = {
  origin:'*',
  credentials:true,     //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

class App {
  constructor() {
    this.app = express();
    this.server = serv.Server(this.app)
    this.io = io(this.server)
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions))
    this.app.use(express.json())
    this.app.use((req, res, next) => {
      req.io = this.io
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      return next()
    })
  }

  routes() {
    this.app.use(routes);
  }

}

module.exports = new App().server;