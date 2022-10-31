const UserService = require("../../modules/users/user.service.js");

const createUserDto = {
  username: "hoantv",
  password: "123456",
};

const userModelMock = {
  create: jest.fn().mockReturnValue({
    id: 1,
    ...createUserDto,
  }),
  findByPk: jest.fn().mockResolvedValueOnce({
    id: 1,
    ...createUserDto,
  }),
  update: jest.fn(),
  findAll: jest.fn(),
  destroy: jest.fn(),
};

const userService = new UserService(userModelMock);
describe("UserService", () => {
  describe("CREATE", () => {
    it("should return create user", async () => {
      await userService.createUser(createUserDto);
      expect(userModelMock.create).toBeCalledTimes(1);
    });
  });

  describe("UPDATE", () => {
    it("should call update user", async () => {
      await userService.updateUser(createUserDto, 1);
      expect(userModelMock.update).toBeCalledWith(createUserDto, {
        where: { id: 1 },
      });
      expect(userModelMock.update).toBeCalledTimes(1);
    });
  });

  describe("FindAll()", () => {
    it("should find all users", async () => {
      await userService.findAll();
      expect(userModelMock.findAll).toHaveBeenCalled();
    });
  });

  describe("FindOne()", () => {
    it("should find a user", async () => {
      await userService.findOne(1);
      expect(userModelMock.findByPk).toBeCalledWith(1);
    });
  });

  describe("Destroy()", () => {
    it("should destroy user", async () => {
      await userService.destroy(1);
      expect(userModelMock.destroy).toBeCalledWith({ where: { id: 1 } });
    });
  });
});
