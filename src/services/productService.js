const Product = require("../models/Product");

module.exports = class ProductService {
  /**
   * Create a new Product with the provided data.
   *
   * @param {Object} data - The data to create the Product with
   * @return {Promise} a Promise resolving to the response from saving the new Product
   */
  static async createProduct(data) {
    const newProduct = {
      name: data.name,
      photos: data.photos,
    };
    const response = await new Product(newProduct).save();
    return response;
  }

  /**
   * Updates a Product with the provided data.
   *
   * @param {Object} data - The data to update the Product with
   * @return {Object} A promise that resolves to the response from updating the Product
   */
  static async updateProduct(data) {
    const response = await Product.findByIdAndUpdate(
      {_id: data.id},
                    { $set: data },
                    { new: true }
      );
    return response;
  }

  /**
   * Delete a Product with the provided id.
   *
   * @param {Object} productId - The id to delete the Product with
   * @return {Promise} A promise that resolves to the response from deleting the Product
   */
  static async deleteProduct(productId) {
    const response = await Product.findByIdAndDelete(productId);
    return response;
  }
};
