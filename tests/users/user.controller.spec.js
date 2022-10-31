const UserController = require("../../modules/users/user.controller");
const mock = require("../__mocks__");

const createUserDto = {
  username: "hoantv",
  password: "123456",
};
const mockUserService = {
  createUser: jest.fn().mockResolvedValueOnce({ ...createUserDto, id: 1 }),
};
const userController = new UserController(mockUserService);
describe("UserController", () => {
  beforeAll(() => {});

  describe("Create new user", () => {
    it("should call createUser", async () => {
      const mockRequest = mock.mockRequest(createUserDto);
      const mockResponse = mock.mockResponse();
      await userController.createUserController(mockRequest, mockResponse);
      // expect(mockResponse.status).toHaveBeenNthCalledWith(200);
      expect(mockUserService.createUser).toHaveBeenCalledTimes(1);
    });
  });

  afterAll(() => {});
});
