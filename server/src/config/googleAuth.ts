import { RequestHandler } from "express";
const { OAuth2Client } = require("google-auth-library");
const CLIENT_ID =
  "1082370461576-ufpkai7fq1n2mdkrjbej29m3u24nv1m2.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

declare module "express-serve-static-core" {
  interface Request {
    user: any;
  }
}
export const checkGoogleUser: RequestHandler = (req, res, next) => {
  console.log("dwdwadwadwad");
  console.log("dwdwadwadwad");
  const token = req.body.token;
  const user = { name: "", email: "", given_name: "", family_name: "" };
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
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
