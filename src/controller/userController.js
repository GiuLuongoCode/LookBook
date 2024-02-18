const UserService = require("../service/userService");
module.exports = class UserController{
    static async createUser(req, res) {
        try {
            const { name, surname, email } = req.body;
            const newUser = await UserService.createUser(name, surname, email);
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async updateUser(req, res){
        try {
            const { name, surname, email } = req.body;
            const newUser = await UserService.updateUser({name: name, surname: surname, email: email});
            return res.status(204).json(newUser);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static deleteUser(user){
        return user;
    }

};

