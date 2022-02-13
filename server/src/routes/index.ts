import { Request, Response, Router } from "express";
import user from "./user";
import movie from "./movie";
import comment from "./comment";
const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.status(200).send("Mega Movie project! Let's go");
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
routes.use("/comment", comment);
export default routes;
