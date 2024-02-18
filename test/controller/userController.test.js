const UserController = require("../../src/controller/userController");
const UserService = require("../../src/service/userService");

jest.mock("../../src/service/userService");

describe("UserController", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('createUser should return 201 with new user', async () => {
        const req = { body: { name: 'testName', surname: 'testSurname',email: 'test@example.com' } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        const mockNewUser = { name: 'testName', surname: 'testSurname', email: 'test@example.com' };
        UserService.createUser.mockResolvedValueOnce(mockNewUser);

        await UserController.createUser(req, res);

        expect(UserService.createUser).toHaveBeenCalledWith('testName', 'testSurname', 'test@example.com');
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockNewUser);
    });

    // test("Update user", async () => {
    //     const req = { body: { name: 'testName', surname: 'testSurname',email: 'test@example2.com' } };
    //     const res = {
    //         status: jest.fn().mockReturnThis(),
    //         json: jest.fn(),
    //     };
    //     const mockNewUser = { name: 'testName', surname: 'testSurname', email: 'test@example2.com' };
    //     UserService.updateUser.mockResolvedValueOnce(mockNewUser);

    //     await UserController.updateUser(req, res);

    //     expect(UserService.updateUser).toHaveBeenCalledWith('testName', 'testSurname', 'test@example2.com');
    //     expect(res.status).toHaveBeenCalledWith(201);
    //     expect(res.json).toHaveBeenCalledWith(mockNewUser);
    // });

    test("Delete user", () => {
        const deleteUser = {
            name: "John",
            surname: "Snow",
            email: "john.snow@example.udpate.com"
        }
        const user = UserController.deleteUser(deleteUser);
        expect(user).toEqual(deleteUser);
    });
})