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
};
