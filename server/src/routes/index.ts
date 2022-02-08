import { Request, Response, Router } from "express";
import user from "./user";
import movie from "./movie";
const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.status(200).send("dwankdnwkldawdwadwadandlwad");
});

routes.post("/post", (req: Request, res: Response) => {
  const reqbody = req.body;
  const accessToken = req.session["session-token"];
  res
    .status(200)
    .send("Post try: " + reqbody + "Session Token :  " + accessToken);
});



routes.use("/user", user);
routes.use("/movie", movie);
export default routes;
