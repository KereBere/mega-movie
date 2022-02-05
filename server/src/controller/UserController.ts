import express, { Request, RequestHandler, Response } from "express";
import { User } from "../entity/User";
import jwt from "jsonwebtoken";
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);
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
    createSendTokenAndCookie(user.id, user.username, req, res);

    // const token = jwt.sign(
    //   { userId: user.id, username: user.username },
    //   process.env.ACCESS_TOKEN_SECRET,
    //   {
    //     expiresIn: "1h",
    //   }
    // );
    // req.session.userId = user.id;
    // res.cookie("session-token", token, {
    //   httpOnly: true,
    //   maxAge: 30 * 24 * 60 * 60,
    // });
    // res.status(201).send("success");
  };

  public static googleNewUSer: RequestHandler = async (req, res) => {
    console.log("gogigo");
    const { name, email } = req.user;
    console.log("gogigo");
    await User.findOne({ where: { email } })
      .then((user) => {
        if (user) {
          console.log("Google user exist");
          createSendTokenAndCookie(user.id, user.username, req, res);
        } else {
          const user = new User();
          user.name = name;
          user.email = email;
          user.username = name.split(" ").slice(-1).join(" ");
          user.createddAt = new Date();
          User.save(user);
          console.log("Google user created");
          createSendTokenAndCookie(user.id, user.username, req, res);
        }
      })
      .catch((error) => {
        res.status(404).send(error);
        console.log(error);
      });
  };
  public static facebookLogin: RequestHandler = async (req, res) => {
    
  };
}
export default UserController;
function createSendTokenAndCookie(
  userId: string,
  username: string,
  req: Request,
  res: Response
) {
  const token = jwt.sign(
    { userId: userId, username: username },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1h",
    }
  );
  req.session.userId = userId;
  console.log("cookie send");
  console.log("token: " + token);
  res.cookie("session-token", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60,
  });
  console.log(req.cookies["session-token"]);
  res.status(201).send("success");
}
