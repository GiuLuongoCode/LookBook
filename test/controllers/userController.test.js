const UserController = require("../../src/controllers/userController");
const UserService = require("../../src/services/userService");

jest.mock("../../src/services/userService");

describe("UserController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("createUser should return 201 with new user", async () => {
    const req = {
      body: {
        name: "testName",
        surname: "testSurname",
        email: "test@example.com",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockNewUser = {
      name: "testName",
      surname: "testSurname",
      email: "test@example.com",
    };
    UserService.createUser.mockResolvedValueOnce(mockNewUser);

    await UserController.createUser(req, res);

    expect(UserService.createUser).toHaveBeenCalledWith({
      name: "testName",
      surname: "testSurname",
      email: "test@example.com"
    }
    );
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockNewUser);
  });

  test("Update user", async () => {
    const req = {
      params: {
        id: "65d255e0b985568704b8d6b1",
      },
      body: {
        name: "testName",
        surname: "testSurname",
        email: "test@example2.com",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockUpdateUser = {
      id: "testId",
      name: "testName",
      surname: "testSurname",
      email: "test@example2.com",
    };
    UserService.updateUser.mockResolvedValueOnce(mockUpdateUser);

    await UserController.updateUser(req, res);

    expect(UserService.updateUser).toHaveBeenCalledWith(
      {
        id: "testId",
        name: "testName",
        surname: "testSurname",
        email: "test@example2.com",
      }
    );
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.json).toHaveBeenCalledWith(mockUpdateUser);
  });

  test("Delete user", async () => {
    const req = {
      params: { id: "65d255e0b985568704b8d6b1" },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockDeleteUser = {
      name: "testName",
      surname: "testSurname",
      email: "test@example2.com",
    };
    UserService.deleteUser.mockResolvedValueOnce(mockDeleteUser);
    await UserController.deleteUser(req, res);

    expect(UserService.deleteUser).toHaveBeenCalledWith(
      {
        name: "testName",
        surname: "testSurname",
        email: "test@example2.com",
      }
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockDeleteUser);
  });
});
