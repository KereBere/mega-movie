import { RequestHandler } from "express";
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

declare module "express-serve-static-core" {
  interface Request {
    user: any;
  }
}
export const checkGoogleUser: RequestHandler = (req, res, next) => {
  const token = req.body.token;
  const user = { name: "", email: "", given_name: "", family_name: "" };
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });
    const payload = ticket.getPayload();
    user.name = payload.name;
    user.email = payload.email;
  }
  verify()
    .then(() => {
      req.user = user;
      next();
    })
    .catch((err) => {
      res.status(404).send("Google Authentication Error: " + err);
    });
};
