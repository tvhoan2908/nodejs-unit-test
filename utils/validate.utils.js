function validator(schema) {
  return async function (req, res, next) {
    try {
      await schema.validateAsync(req.body, { abortEarly: true });
      next();
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  };
}

module.exports = {
  validator,
};
