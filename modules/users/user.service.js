class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async createUser(request) {
    return this.userModel.create(request);
  }

  async updateUser(request, id) {
    return this.userModel.update(request, {
      where: { id },
    });
  }

  async findAll() {
    return this.userModel.findAll();
  }

  async findOne(id) {
    return this.userModel.findByPk(id);
  }

  async destroy(id) {
    return this.userModel.destroy({
      where: { id },
    });
  }
}

module.exports = UserService;
