const OrderSwapService = require("../services/orderSwapService");

module.exports = class OrderSwapController {
  static async createOrderSwap(req, res) {
    try {
      const { userFrom, userTo, productOffered, productRequested } = req.body;
      const newOrder = await OrderSwapService.createOrderSwap(
        userFrom,
        userTo,
        productOffered,
        productRequested
      );
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

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

  static async deleteOrderSwap(req, res) {
    try {
      const { id } = req.params;
      await OrderSwapService.deleteOrderSwap(id);
      res
        .status(200)
        .json({ success: true, message: "Order deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllOrders(req, res) {
    try {
      const orders = await OrderSwapService.getAllOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getOrdersByDate(req, res) {
    try {
      const { date } = req.params;
      const orders = await OrderSwapService.getOrdersByDate(date);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getOrdersByProduct(req, res) {
    try {
      const { productId } = req.params;
      const orders = await OrderSwapService.getOrdersByProduct(productId);
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
   // TODO: Add getOrdersByStatus

   // TODO: Add getOrdersByUser

};
