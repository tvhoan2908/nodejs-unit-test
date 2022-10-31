class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async createUserController(request, response) {
    try {
      console.log("createUserController: ", this);
      const data = await this.userService.createUser(request.body);
      response.json({ success: true, data });
    } catch (err) {
      console.log(err);
      response.status(500).json({ message: err.message });
    }
  }

  async updateUserController(request, response) {
    try {
      const data = await this.userService.updateUser(
        request.body,
        request.params.id
      );
      response.json({ success: true, data });
    } catch (err) {
      console.log(err);
      response.status(500).json({ message: err.message });
    }
  }

  async findUsersController(request, response) {
    try {
      const data = await this.userService.findAll();
      response.json({ success: true, data });
    } catch (err) {
      console.log(err);
      response.status(500).json({ message: err.message });
    }
  }

  async findUserController(request, response) {
    try {
      const data = await this.userService.findOne(request.params.id);
      response.json({ success: true, data });
    } catch (err) {
      console.log(err);
      response.status(500).json({ message: err.message });
    }
  }

  async destroyUserController(request, response) {
    try {
      const data = await this.userService.destroy(request.params.id);
      response.json({ success: true, data });
    } catch (err) {
      console.log(err);
      response.status(500).json({ message: err.message });
    }
  }
}

module.exports = UserController;
