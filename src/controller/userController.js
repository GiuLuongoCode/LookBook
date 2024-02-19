const UserService = require("../service/userService");
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
      const newUser = await UserService.createUser(name, surname, email);
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
      const newUser = await UserService.updateUser(name, surname, email);
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
      const { name, surname, email } = req.body;
      const deletedUser = UserService.deleteUser(name, surname, email);
      return res.status(200).json(deletedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
