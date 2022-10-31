const request = require("supertest");
const app = require("../../app");

const createUserDto = {
  username: "hoantv",
  password: "123456",
};
const USER_ID = 3;

beforeAll(() => console.log("Before all suite."));

describe("UserController", () => {
  describe("CREATE", () => {
    it("should return user after create", async () => {
      const res = await request(app).post("/api/users").send(createUserDto);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("success");
    });
  });

  describe("UPDATE", () => {
    it("should update user", async () => {
      const res = await request(app)
        .put(`/api/users/${USER_ID}`)
        .send(createUserDto);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("success");
    });
  });

  describe("FIND ALL", () => {
    it("should return status 200", async () => {
      const res = await request(app).get("/api/users");
      expect(res.statusCode).toBe(200);
    });
  });

  describe("Find one", () => {
    it("should return status 200", async () => {
      const res = await request(app).get(`/api/users/${USER_ID}`);
      expect(res.statusCode).toBe(200);
    });
  });

  describe("DESTROY", () => {
    it("should return status 200", async () => {
      const res = await request(app).delete(`/api/users/${USER_ID}`);
      expect(res.statusCode).toBe(200);
    });
  });
});

afterAll(() => console.log("After all suite..."));
