import { Request, RequestHandler, Response } from "express";
import { User } from "../entity/User";
import jwt from "jsonwebtoken";
import { Movie } from "../entity/Movie";
declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

const createToken = (userId: string, username: string) => {
  return jwt.sign(
    { userId: userId, username: username },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1h",
    }
  );
};
class UserController {
  public static newUser: RequestHandler = async (req, res) => {
    console.log(req.body);
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
      return res.json({ success: false, errors: "err" });
    }
    console.log("user created");
    return res.status(201).json({ success: true, message: "User Created" });
  };

  public static login: RequestHandler = async (req, res) => {
    console.log("user log giriş");
    const { email, password } = req.body;
    console.log(req.body);
    if (!(email && password)) {
      return res.status(400).json({
        success: false,
        error: "Please enter your email and password",
      });
    }
    const userRepository = User;
    let user: User;
    try {
      user = await userRepository.findOneOrFail({ where: { email } });
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, error: "User does not exist" });
    }

    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid password" });
    }
    const id = user.id;
    req.session.userId = id;
    const favMovies = await Movie.find({ where: { user: user } });
    const token = createToken(user.id, user.username);
    const allMovies = await Movie.find({ order: { user: "ASC" } });
    console.log(allMovies);
    return res.status(201).json({
      allMovies,
      favMovies,
      success: true,
      message: "Login Successfull",
      user: {
        name: user.name,
        id: user.id,
        username: user.username,
        email: user.email,
        token: token,
      },
    });
  };

  public static googleNewUSer: RequestHandler = async (req, res) => {
    console.log("gogigo");
    const { name, email } = req.user;
    console.log("gogigo");
    let user;
    try {
      user = await User.findOneOrFail({ where: { email: email } });
      if (user) {
        req.session.userId = user.id;
        const favMovies = await Movie.find({ where: { user: user } });
        // const favActors = await Actor.find({ where: { user: user } });
        const token = createToken(user.id, user.username);
        console.log(token);
        return res.status(201).json({
          favMovies,
          success: true,
          message: "Login Successfull",
          user: {
            name: user.name,
            id: user.id,
            username: user.username,
            email: user.email,
            token: token,
          },
        });
      } else {
        const user = new User();
        user.name = name;
        user.email = email;
        user.username = name.split(" ").slice(-1).join(" ");
        user.createddAt = new Date();
        await User.save(user);
        console.log("Google user created");
        req.session.userId = user.id;
        const token = createToken(user.id, user.username);
        return res.status(201).json({
          success: true,
          message: "Login Successfull",
          user: {
            name: user.name,
            id: user.id,
            username: user.username,
            email: user.email,
            token: token,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  public static facebookLogin: RequestHandler = async (req, res) => {
    console.log("hehe");
    console.log(req.body);
    console.log(req.cookies);
    res.json("dwadwadwd");
  };

  public static logout: RequestHandler = (req, res) => {
    console.log("logged out");
    req.session.userId = null;
    res.clearCookie("token");
    res.status(200).send({ success: true, message: "Logged out succesfully" });
  };
}

export default UserController;
