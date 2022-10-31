const Joi = require("joi");

const createUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const updateUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().allow(null),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
};
