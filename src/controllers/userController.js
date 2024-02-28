const UserService = require("../services/userService");
module.exports = class UserController {
  /**
   *  Creates a new user using the provided request and response objects.
   *
   * @param {Object} req - the request object
   * @param {Object} res - the response object
   * @return {Promise} the newly created user object in JSON format
   */
  static async createUser(req, res) {
    try {
      const { name, surname, email } = req.body;
      const newUser = await UserService.createUser({name: name, surname: surname, email: email});
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Updates a user using the provided request and response objects.
   *
   * @param {Object} req - The request object
   * @param {Object} res - The response object
   * @return {Promise} the updated user in JSON format
   */
  static async updateUser(req, res) {
    try {
      const { name, surname, email } = req.body;
      const userId = req.params.id;
      const newUser = await UserService.updateUser({id: userId, name: name, surname: surname,email: email});
      return res.status(204).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Deletes a user using the provided request and response objects.
   *
   * @param {Object} req - the request object
   * @param {Object} res - the response object
   * @return {Object} the deleted user in JSON format
   */
  static deleteUser(req, res) {
    try {
      const userId = req.params.id;
      const deletedUser = UserService.deleteUser(userId);
      return res.status(200).json(deletedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
