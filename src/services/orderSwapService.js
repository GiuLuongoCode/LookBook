const OrderSwapModel = require("../models/OrderSwap");
const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 10;
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
   * Retrieves all orders from the database with pagination support.
   *
   * @param {number} page - The page number.
   * @param {number} perPage - The number of items per page.
   * @return {Promise<{totalCount: number, currentPage: number, perPage: number, totalPages: number, data: Array<Order>}>} A promise that resolves to paginated orders.
   */
  static async getAllOrders(page = DEFAULT_PAGE, perPage = DEFAULT_PER_PAGE) {
    try {
      const orders = await OrderSwapModel.find()
        .skip((page - 1) * perPage)
        .limit(perPage);

      return orders;
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
  static async getOrdersByDate(date, page = DEFAULT_PAGE, perPage = DEFAULT_PER_PAGE) {
    try {
      const orders = await OrderSwapModel.find({
        createdAt: { $gte: new Date(date) },
      })
        .skip((page - 1) * perPage)
        .limit(perPage);
      return orders;
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
  static async getOrdersByProduct(productId, page = DEFAULT_PAGE, perPage = DEFAULT_PER_PAGE) {
    try {
      const orders = await OrderSwapModel.find({
        $or: [{ productOffered: productId }, { productRequested: productId }],
      })
      .skip((page - 1) * perPage)
      .limit(perPage);
      return orders;
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
  static async getOrdersByStatus(status, page = DEFAULT_PAGE, perPage = DEFAULT_PER_PAGE) {
    try {
      const orders = await OrderSwapModel.find({ status })        
      .skip((page - 1) * perPage)
      .limit(perPage);
      return orders;
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
  static async getOrdersByUser(userId, page = DEFAULT_PAGE, perPage = DEFAULT_PER_PAGE) {
    try {
      const orders = await OrderSwapModel.find({
        $or: [{ userFrom: userId }, { userTo: userId }],
      })
      .skip((page - 1) * perPage)
      .limit(perPage);
      return orders;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Retrieves orders based on the provided filters with pagination support.
   *
   * @param {Object} options - Object containing filters for product, status, user, and date
   * @param {number} page - The page number.
   * @param {number} perPage - The number of items per page.
   * @return {Promise<{totalCount: number, currentPage: number, perPage: number, totalPages: number, data: Array<Order>}>} A promise that resolves to paginated orders.
   */
  static async getOrders({
    productId,
    status,
    userId,
    date,
    page = DEFAULT_PAGE,
    perPage = DEFAULT_PER_PAGE,
  }) {
    const totalCount = await OrderSwapModel.countDocuments();
    const totalPages = Math.ceil(totalCount / perPage);
    const promises = [];
    if (productId) {
      promises.push(this.getOrdersByProduct(productId));
    }
    if (status) {
      promises.push(this.getOrdersByStatus(status));
    }
    if (userId) {
      promises.push(this.getOrdersByUser(userId));
    }
    if (date) {
      promises.push(this.getOrdersByDate(date));
    }
    if (!promises.length) {
      promises.push(this.getAllOrders(page, perPage));
    }
    const results = await Promise.all(promises);
    const orders = results.flat();

    return {
      totalCount: orders.length,
      currentPage: page,
      perPage,
      totalPages: totalPages,
      data: orders.slice((page - 1) * perPage, page * perPage),
    };
  }
};
