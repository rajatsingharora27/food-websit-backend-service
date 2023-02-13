const productSchema = require("../models/productModel");

class ProductRepository {
  controller() {}

  async createProduct(productData) {
    try {
      const newProduct = await productSchema.create(productData);
      return newProduct;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductRepository;
