const ProductService = require("../services/productService");
module.exports = class ProductController {
  /**
   *  Creates a new product using the provided request and response objects.
   *
   * @param {Object} req - the request object
   * @param {Object} res - the response object
   * @return {Promise} the newly created user object in JSON format
   */
  static async createProduct(req, res) {
    try {
      const { name, photos } = req.body;
      const newProduct = await ProductService.createProduct(name, photos);
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Updates a product using the provided request and response objects.
   *
   * @param {Object} req - The request object
   * @param {Object} res - The response object
   * @return {Promise} the updated user in JSON format
   */
  static async updateProduct(req, res) {
    try {
      const { name, photos } = req.body;
      const updatedProduct = await ProductService.updateProduct(name, photos);
      return res.status(204).json(updatedProduct);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Deletes a product using the provided request and response objects.
   *
   * @param {Object} req - the request object
   * @param {Object} res - the response object
   * @return {Object} the deleted user in JSON format
   */
  static deleteProduct(req, res) {
    try {
      const { name, photos } = req.body;
      const deletedProduct = ProductService.deleteProduct(name, photos);
      return res.status(200).json(deletedProduct);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
