import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { createConnection, getConnection } from "typeorm";
import routes from "./routes";
import cookieParser from "cookie-parser";
var cors = require("cors");

import session from "express-session";
import path from "path";
// import * as session from "express-session";
// import { TypeormStore } from "typeorm-store";
// import { Session } from "./entity/session";

const port = process.env.PORT || 3000;
createConnection()
  .then(async () => {
    const app = express();

    app.use(cors());
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

    app.listen(port, () => console.log(`I am listening on port ${port} 😸`));
  })
  .catch((error) => console.log("Uh-oh 😿", error));
