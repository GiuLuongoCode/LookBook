const User = require("../models/User");

module.exports = class UserService {
    static async createUser(data) {
        const newUser = {
            name: data.name,
            surname: data.surname,
            email: data.email
        };
        const response = await new User(newUser).save();
        return response;
    }

    static async updateUser(data) {
        const response = await User.findOneAndUpdate({ email: data.email }, data, {
            new: true
        });
        return response;
    }
};
