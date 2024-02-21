const OrderSwapModel = require("../models/OrderSwap");

module.exports = class OrderSwapService {
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

  static async deleteOrderSwap(orderId) {
    try {
      await OrderSwapModel.findByIdAndDelete(orderId);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
