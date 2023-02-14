const { ProductRepository } = require("../repository/index");

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async create(productData) {
    try {
      const product = await this.productRepository.createProduct(productData);
    } catch (error) {}
  }
}
