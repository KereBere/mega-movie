import { RequestHandler } from "express";
import { body, validationResult } from "express-validator";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const sendValidationErrors: RequestHandler = async (req, res, next) => {
  const errors: Array<String> = validationResult(req)
    .array()
    .map((error) => error.msg);

  errors.length > 0 ? res.send(errors) : next();
};

export const newUserValidation = [
  body("name").not().isEmpty().withMessage("Please enter your name"),
  body("username").not().isEmpty().withMessage("Please enter your username"),
  body("email")
    .isEmail()
    .withMessage("Please enter your email")
    .custom(
      async (useremail) =>
        await getRepository(User)
          .findOne({
            email: useremail,
          })
          .then((user) => {
            if (user) {
              console.log(user);
              // return Promise.reject("E-mail already in use");
              throw new Error("E-mail already in use");
            }
            return user;
          })
    ),
  body("username")
    .not()
    .isEmpty()
    .custom(
      async (username) =>
        await getRepository(User)
          .findOne({
            username: username,
          })
          .then((user) => {
            if (user) {
              console.log(user);
              throw new Error("Username alreadu in use");
            }
            return user;
          })
    ),
  body("password")
    .not()
    .isEmpty()

    .custom((password, { req }) => {
      if (password !== req.body.password2) {
        console.log("edwe");
        throw new Error("Password confirmation does not match password");
      }
      return password;
    }),
];
