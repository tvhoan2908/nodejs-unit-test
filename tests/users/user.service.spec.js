const UserService = require("../../modules/users/user.service.js");
const createUserDto = {
  username: "hoantv",
  password: "123456",
};
const { User } = require("../../models");

jest.mock("../../models", () => {
  return {
    User: {
      create: jest.fn().mockResolvedValue({ ...createUserDto, id: 1 }),
      findByPk: jest.fn().mockResolvedValueOnce({
        id: 1,
        ...createUserDto,
      }),
      update: jest.fn(),
      findAll: jest.fn(),
      destroy: jest.fn(),
    },
  };
});

describe("UserService", () => {
  describe("CREATE", () => {
    it("should return create user", async () => {
      const createSpy = jest.spyOn(User, "create");
      await UserService.createUser(createUserDto);
      expect(createSpy).toBeCalledTimes(1);
      expect(createSpy).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe("UPDATE", () => {
    it("should call update user", async () => {
      await UserService.updateUser(createUserDto, 1);
      expect(User.update).toBeCalledTimes(1);
      expect(User.update).toBeCalledWith(createUserDto, {
        where: { id: 1 },
      });
    });
  });

  describe("FindAll()", () => {
    it("should find all users", async () => {
      await UserService.findAllUser();
      expect(User.findAll).toHaveBeenCalled();
    });
  });

  describe("FindOne()", () => {
    it("should find a user", async () => {
      await UserService.findOneUser(1);
      expect(User.findByPk).toBeCalledWith(1);
    });
  });

  describe("Destroy()", () => {
    it("should destroy user", async () => {
      await UserService.destroyUser(1);
      expect(User.destroy).toBeCalledWith({ where: { id: 1 } });
    });
  });
});
