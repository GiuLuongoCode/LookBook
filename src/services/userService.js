const User = require("../models/User");

module.exports = class UserService {
  /**
   * Create a new user with the provided data.
   *
   * @param {Object} data - The data to create the user with
   * @return {Promise} a Promise resolving to the response from saving the new user
   */
  static async createUser(data) {
    const newUser = {
      name: data.name,
      surname: data.surname,
      email: data.email,
    };
    const response = await new User(newUser).save();
    return response;
  }

  /**
   * Updates a user with the provided data.
   *
   * @param {Object} data - The data to update the user with
   * @return {Object} A promise that resolves to the response from updating the user
   */
  static async updateUser(data) {
    const response = await User.findOneAndUpdate(
      { _id: data._id ,email: data.email, name: data.name, surname: data.surname },
      data,
      {
        new: true,
      }
    );
    return response;
  }

  /**
   * Delete a user with the provided data.
   *
   * @param {Object} data - The data to delete the user with
   * @return {Promise} A promise that resolves to the response from deleting the user
   */
  static async deleteUser(data) {
    const deletedUser = {
      email: data.email,
      name: data.name,
      surname: data.surname,
    };
    const response = await User.findOneAndDelete(deletedUser);
    return response;
  }
};
