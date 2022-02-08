import { Router } from "express";
import UserController from "../controller/UserController";
import {
  newUserValidation,
  sendValidationErrors,
} from "../middlewares/newUserValidation";
import { checkGoogleUser } from "../config/googleAuth";
const router = Router();

router.post(
  "/newUser",
  newUserValidation,
  sendValidationErrors,
  UserController.newUser
);
router.post("/login", UserController.login); 

router.post("/google", checkGoogleUser, UserController.googleNewUSer);
router.post("/facebook-login", UserController.facebookLogin);

export default router;
