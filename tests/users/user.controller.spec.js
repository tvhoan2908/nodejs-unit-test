const UserController = require("../../modules/users/user.controller");
const UserService = require("../../modules/users/user.service.js");
const mock = require("../__mocks__");

const createUserDto = {
  username: "hoantv",
  password: "123456",
};
jest.mock("../../modules/users/user.service.js", () => {
  return {
    createUser: jest.fn(),
    updateUser: jest.fn(),
    findAllUser: jest.fn(),
    findOneUser: jest.fn(),
    destroyUser: jest.fn(),
  };
});

describe("UserController", () => {
  beforeAll(() => {});

  describe("Create new user", () => {
    it("should call createUser", async () => {
      const mockRequest = mock.mockRequest(createUserDto);
      const mockResponse = mock.mockResponse();
      await UserController.createUserController(mockRequest, mockResponse);
      expect(UserService.createUser).toHaveBeenCalledTimes(1);
      expect(UserService.createUser).toBeCalledWith(createUserDto);
    });
  });

  describe("updateUserController", () => {
    it("should call updateUser", async () => {
      const mockRequest = mock.mockRequest(createUserDto, { id: 1 });
      const mockResponse = mock.mockResponse();
      await UserController.updateUserController(mockRequest, mockResponse);
      expect(UserService.updateUser).toHaveBeenCalledTimes(1);
      expect(UserService.updateUser).toBeCalledWith(createUserDto, 1);
    });
  });

  describe("findUsersController", () => {
    it("should call findAllUser", async () => {
      const mockRequest = mock.mockRequest();
      const mockResponse = mock.mockResponse();
      await UserController.findUsersController(mockRequest, mockResponse);
      expect(UserService.findAllUser).toHaveBeenCalledTimes(1);
    });
  });

  describe("findUserController", () => {
    it("should call findOneUser", async () => {
      const mockRequest = mock.mockRequest(null, { id: 1 });
      const mockResponse = mock.mockResponse();
      await UserController.findUserController(mockRequest, mockResponse);
      expect(UserService.findOneUser).toHaveBeenCalledTimes(1);
      expect(UserService.findOneUser).toHaveBeenCalledWith(1);
    });
  });

  describe("destroyUserController", () => {
    it("should call destroyUser", async () => {
      const mockRequest = mock.mockRequest(null, { id: 1 });
      const mockResponse = mock.mockResponse();
      await UserController.destroyUserController(mockRequest, mockResponse);
      expect(UserService.destroyUser).toHaveBeenCalledTimes(1);
      expect(UserService.destroyUser).toHaveBeenCalledWith(1);
    });
  });

  afterAll(() => {});
});
