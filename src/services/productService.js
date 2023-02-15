const { ProductRepository } = require("../repository/index");

/**
 * This service is responsible for
 * maiking the product and storig all the info 
 * present in the productSchema.
 * 
 * we will make use of ProductListMasterRepository
    to put the tag / category of the product.
 * 
 */

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async create(productData) {
    try {
      // check if the
      const product = await this.productRepository.createProduct(productData);
    } catch (error) {}
  }
}

module.exports = ProductService;
