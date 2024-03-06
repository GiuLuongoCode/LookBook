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
   * Gets of orders.
   *
   * @param {Object} req - the request object
   * @param {Object} res - the response object
   * @return {Promise} JSON response with the orders or error message
   */
  static async getOrders(req, res) {
    try {
      const params = req.query;
      console.log(params);
      const orders = await OrderSwapService.getOrders(params);
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
