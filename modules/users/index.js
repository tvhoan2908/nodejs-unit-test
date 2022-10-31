const { validator } = require("./../../utils/validate.utils");
const express = require("express");
const { createUserSchema, updateUserSchema } = require("./user.validation");
const UserController = require("./user.controller");
const { User } = require("../../models");
const UserService = require("./user.service");
const userService = new UserService(User);

module.exports = (app) => {
  const router = express.Router();
  const userController = new UserController(userService);
  router.post(
    "/",
    validator(createUserSchema),
    userController.createUserController
  );
  router.put(
    "/:id",
    validator(updateUserSchema),
    userController.updateUserController
  );
  router.get("/", userController.findUsersController);
  router.get("/:id", userController.findUserController);
  router.delete("/:id", userController.destroyUserController);

  app.use("/api/users", router);
};
