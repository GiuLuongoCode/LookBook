const UserService = require("../../src/service/userService");
const mongoose = require("mongoose");
require("dotenv").config();

const uriStart = process.env.MONGODB_URI_START;
const uriEnd = process.env.MONGODB_URI_END;
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
const user = encodeURIComponent(process.env.MONGODB_USER);
const cluster = process.env.MONGODB_CLUSTER;
const connectionString = `${uriStart}${user}:${password}@${cluster}${uriEnd}`;

describe("Should perform CRUD on UserService", () => {
    beforeAll(async() => {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    });
    afterAll(() => {
        mongoose.disconnect();
    });
    test("Create User", async () => {
        const newUser = {
            name: "testName",
            surname: "testSurname",
            email: "test@example.com"
        };
        const user = await UserService.createUser(newUser);
        expect(user).toEqual(expect.objectContaining(newUser));
    }, 30000);

    test("Update User", async () => {
        const userToUpdate = {
            name: "testNameUpdate",
            surname: "testSurname",
            email: "test@example.com"
        };
        const user = await UserService.updateUser(userToUpdate);
        expect(user).toEqual(expect.objectContaining(userToUpdate));
    }, 30000);

    test("Delete User", async () => {
        const userToDelete = {
            name: "testName",
            surname: "testSurname",
            email: "test@example.com"
        };
        const user = await UserService.deleteUser(userToDelete);
        expect(user).toEqual(expect.objectContaining(userToDelete));
    })
})