import express, { RequestHandler } from "express";
import { User } from "../entity/User";
import jwt from "jsonwebtoken";
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "1082370461576-ufpkai7fq1n2mdkrjbej29m3u24nv1m2.apps.googleusercontent.com"
);
declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}
class UserController {
  public static newUser: RequestHandler = async (req, res) => {
    const { name, username, email, password } = req.body;
    const user = new User();
    user.name = name;
    user.username = username;
    user.email = email;
    user.password = password;
    user.createddAt = new Date();
    user.hashPassword();

    try {
      await User.save(user);
    } catch (err) {
      return res.status(409).send(err);
    }
    res.status(201).send("User Created");
  };

  public static login: RequestHandler = async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send();
    }
    const userRepository = User;
    let user: User;
    try {
      user = await userRepository.findOneOrFail({ where: { email } });
    } catch (error) {
      res.status(401).send();
    }

    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send();
      return;
    }
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      "config.jwtSecret",
      {
        expiresIn: "1h",
      }
    );
    req.session.userId = user.id;
    res.cookie("session-token", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60,
    });
    res.status(201).send("success");
  };

  public static googleNewUSer: RequestHandler = async (req, res) => {
    console.log("gogigo");
    const { name, email } = req.user;
    console.log("gogigo");
    await User.findOne({ where: { email } })
      .then((user) => {
        if (user) {
          console.log("gogigo");
          const token = jwt.sign(
            { userId: user.id, username: user.username },
            "config.jwtSecret",
            {
              expiresIn: "1h",
            }
          );
          req.session.userId = user.id;
          res.status(201).send(token);
        } else {
          const user = new User();
          user.name = name;
          user.email = email;
          user.username = name.split(" ").slice(-1).join(" ");
          user.createddAt = new Date();
          User.save(user);
          const token = jwt.sign(
            { userId: user.id, username: user.username },
            "config.jwtSecret",
            {
              expiresIn: "1h",
            }
          );
          req.session.userId = user.id;
          res.cookie("session-token", token, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60,
          });
          res.status(201).send("success");
        }
      })
      .catch((error) => {
        res.status(404).send(error);
        console.log(error);
      });
  };
}
export default UserController;
