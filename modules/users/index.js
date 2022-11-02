const { validator } = require("./../../utils/validate.utils");
const express = require("express");
const { createUserSchema, updateUserSchema } = require("./user.validation");
const UserController = require("./user.controller");

module.exports = (app) => {
  const router = express.Router();
  router.post(
    "/",
    validator(createUserSchema),
    UserController.createUserController
  );
  router.put(
    "/:id",
    validator(updateUserSchema),
    UserController.updateUserController
  );
  router.get("/", UserController.findUsersController);
  router.get("/:id", UserController.findUserController);
  router.delete("/:id", UserController.destroyUserController);

  app.use("/api/users", router);
};
