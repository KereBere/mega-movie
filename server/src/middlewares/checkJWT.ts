import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const checkJWT: RequestHandler = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ success: false, errror: "Invalid token" });
  }

  const token = req.headers.authorization.split(" ")[1] as string;
  let jwtPayload;

  try {
    jwtPayload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    res.locals.jwtPayload = jwtPayload;
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ success: false, error: "Something went wrong :(" });
  }
};
