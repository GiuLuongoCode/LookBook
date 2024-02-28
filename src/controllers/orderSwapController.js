const OrderSwapService = require("../services/orderSwapService");

module.exports = class OrderSwapController {
  /**
   * Create an order swap using the provided request and response objects.
   *
   * @param {Object} req - the request object
   * @param {Object} res - the response object
   *@return {Promise} The JSON response with all orders or an error message
   */
  static async createOrderSwap(req, res) {
    try {
      const { userFrom, userTo, productOffered, productRequested } = req.body;
      const newOrder = await OrderSwapService.createOrderSwap(
        userFrom,
        userTo,
        productOffered,
        productRequested
      );
      return res.status(201).json(newOrder);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Updates an order swap.
   *
   * @param {Object} req - the request object
   * @param {Object} res - the response object
   * @return {Promise} The JSON response with all orders or an error message
   */
  static async updateOrderSwap(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const updatedOrder = await OrderSwapService.updateOrderSwap(id, status);
      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  /**
   * Deletes an order swap.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {Promise} The JSON response with all orders or an error message
   */
  static async deleteOrderSwap(req, res) {
    try {
      const { id } = req.params;
      await OrderSwapService.deleteOrderSwap(id);
      return res
        .status(200)
        .json({ success: true, message: "Order deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Get all orders
   *
   * @param {Object} req - The request object
   * @param {Object} res - The response object
   * @return {Promise} The JSON response with all orders or an error message
   */
  static async getAllOrders(req, res) {
    try {
      const orders = await OrderSwapService.getAllOrders();
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Retrieves orders by date.
   *
   * @param {Object} req - the request object
   * @param {Object} res - the response object
   * @return {Promise} The JSON response with all orders or an error message
   */
  static async getOrdersByDate(req, res) {
    try {
      const { date } = req.params;
      const orders = await OrderSwapService.getOrdersByDate(date);
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Retrieves orders by product.
   *
   * @param {Object} req - The request object
   * @param {Object} res - The response object
   * @return {Promise} The JSON response with all orders or an error message
   */
  static async getOrdersByProduct(req, res) {
    try {
      const { productId } = req.params;
      const orders = await OrderSwapService.getOrdersByProduct(productId);
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /**
   * Retrieves orders by status.
   *
   * @param {Object} req - the request object
   * @param {Object} res - the response object
   * @return {Promise} The JSON response with all orders or an error message
   */
  static async getOrdersByStatus(req, res) {
    try {
      const { status } = req.params;
      const orders = await OrderSwapService.getOrdersByStatus(status);
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Retrieves orders for a specific user.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @return {Promise} The JSON response with all orders or an error message
   */
  static async getOrdersByUser(req, res) {
    try {
      const { userId } = req.params;
      const orders = await OrderSwapService.getOrdersByUser(userId);
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
