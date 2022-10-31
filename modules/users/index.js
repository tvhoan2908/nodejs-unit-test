const { validator } = require("./../../utils/validate.utils");
const express = require("express");
const { createUserSchema, updateUserSchema } = require("./user.validation");
const UserController = require("./user.controller");
const { User } = require("../../models");
const UserService = require("./user.service");
const userService = new UserService(User);
const userController = new UserController(userService);

module.exports = (app) => {
  const router = express.Router();
  router.post(
    "/",
    validator(createUserSchema),
    userController.createUserController.bind(userController)
  );
  router.put(
    "/:id",
    validator(updateUserSchema),
    userController.updateUserController.bind(userController)
  );
  router.get("/", userController.findUsersController.bind(userController));
  router.get("/:id", userController.findUserController.bind(userController));
  router.delete(
    "/:id",
    userController.destroyUserController.bind(userController)
  );

  app.use("/api/users", router);
};
