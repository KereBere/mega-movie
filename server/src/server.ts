import "dotenv/config";
import "reflect-metadata";
import express from "express";
import https from "https";
import path from "path";
import fs from "fs";
import { createConnection, getConnection } from "typeorm";
import routes from "./routes";
import cookieParser from "cookie-parser";
var cors = require("cors");

import session from "express-session";
// import * as session from "express-session";
// import { TypeormStore } from "typeorm-store";
// import { Session } from "./entity/session";

createConnection()
  .then(async () => {
    const port = 3443;
    const app = express();

    const httpOptions = {
      cert: fs.readFileSync(path.join(__dirname, "ssl", "cert.pem")),
      key: fs.readFileSync(path.join(__dirname, "ssl", "key.pem")),
    };

    app.use(
      cors({
        origin: "*",
      })
    );
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use(express.json());
    app.use(cookieParser());
    // const repository = getConnection().getRepository(Session);
    // app.use(bodyParser.json());
    const session = require("express-session");

    app.use(
      session({
        secret: "Secret Key",
        resave: false,
        saveUninitialized: true,
      })
    );

    app.use("/", routes);

    https.createServer(httpOptions, app).listen(port, () => {
      console.log(`Serving https server in the ${port}`);
    });
  })
  .catch((error) => console.log("Uh-oh 😿", error));
