const { User } = require("../../models");

async function createUser(request) {
  return User.create(request);
}

async function updateUser(request, id) {
  return User.update(request, {
    where: { id },
  });
}

async function findAllUser() {
  return User.findAll();
}

async function findOneUser(id) {
  return User.findByPk(id);
}

async function destroyUser(id) {
  return User.destroy({
    where: { id },
  });
}

module.exports = {
  createUser,
  updateUser,
  findAllUser,
  findOneUser,
  destroyUser,
};
