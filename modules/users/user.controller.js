const UserService = require("./user.service");

async function createUserController(request, response) {
  try {
    const data = await UserService.createUser(request.body);
    response.json({ success: true, data });
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: err.message });
  }
}

async function updateUserController(request, response) {
  try {
    const data = await UserService.updateUser(request.body, request.params.id);
    response.json({ success: true, data });
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: err.message });
  }
}

async function findUsersController(request, response) {
  try {
    const data = await UserService.findAllUser();
    response.json({ success: true, data });
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: err.message });
  }
}

async function findUserController(request, response) {
  try {
    const data = await UserService.findOneUser(request.params.id);
    response.json({ success: true, data });
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: err.message });
  }
}

async function destroyUserController(request, response) {
  try {
    const data = await UserService.destroyUser(request.params.id);
    response.json({ success: true, data });
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: err.message });
  }
}

module.exports = {
  createUserController,
  updateUserController,
  findUsersController,
  findUserController,
  destroyUserController,
};
