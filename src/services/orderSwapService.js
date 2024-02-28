const OrderSwapModel = require("../models/OrderSwap");

module.exports = class OrderSwapService {
  /**
   * Create an order swap between two users with the offered and requested products.
   *
   * @param {type} userFrom - description of parameter
   * @param {type} userTo - description of parameter
   * @param {type} productOffered - description of parameter
   * @param {type} productRequested - description of parameter
   * @return {type} the newly created order swap
   */
  static async createOrderSwap(
    userFrom,
    userTo,
    productOffered,
    productRequested
  ) {
    try {
      const newOrder = await OrderSwapModel.create({
        userFrom,
        userTo,
        productOffered,
        productRequested,
      });
      return newOrder;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Updates the order swap with the given ID to the specified status.
   *
   * @param {string} orderId - The ID of the order to update.
   * @param {string} status - The new status for the order.
   * @return {Promise} The updated order swap.
   */
  static async updateOrderSwap(orderId, status) {
    try {
      const updatedOrder = await OrderSwapModel.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );
      return updatedOrder;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Deletes an order swap by ID.
   *
   * @param {string} orderId - The ID of the order to be deleted.
   * @return {Promise<void>} A promise that resolves when the order swap is deleted.
   */
  static async deleteOrderSwap(orderId) {
    try {
      await OrderSwapModel.findByIdAndDelete(orderId);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Retrieves all orders from the database.
   *
   * @return {Promise<Array<Order>>} The list of all orders
   */
  static async getAllOrders() {
    try {
      return await OrderSwapModel.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Retrieves orders based on the specified date.
   *
   * @param {Date} date - The date to filter the orders.
   * @return {Promise<Array>} A promise that resolves to an array of orders.
   */
  static async getOrdersByDate(date) {
    try {
      return await OrderSwapModel.find({ createdAt: { $gte: new Date(date) } });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Retrieves orders by product ID.
   *
   * @param {string} productId - The ID of the product
   * @return {Promise<Array>} A promise that resolves to an array of orders
   */
  static async getOrdersByProduct(productId) {
    try {
      return await OrderSwapModel.find({
        $or: [{ productOffered: productId }, { productRequested: productId }],
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Retrieves orders by status.
   *
   * @param {string} status - the status of the orders to retrieve
   * @return {Promise<Array>} an array of orders with the specified status
   */
  static async getOrdersByStatus(status) {
    try {
      return await OrderSwapModel.find({ status });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Retrieves orders by user ID.
   *
   * @param {type} userId - the ID of the user
   * @return {type} an array of orders associated with the user
   */
  static async getOrdersByUser(userId) {
    try {
      return await OrderSwapModel.find({
        $or: [{ userFrom: userId }, { userTo: userId }],
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
