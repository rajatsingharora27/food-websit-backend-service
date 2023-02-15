const logger = require("../logger");
const productSchema = require("../models/productModel");
const { StatusCodes } = require("http-status-codes");
const {
  DATA_SAVED_SUCCESSFULLY_1,
  REPOSITORY_LAYER_ERROR_MESSAGE,
  DATA_NOT_STORED,
  REPOSITORY_LAYER_ERROR,
} = require("../messageUtils/message");
const RepositoryError = require("../Error/repositoryError");
const ProductListMaster = require("./productListMasterRepository");

class ProductRepository {
  constructor() {
    this.productListRepo = new ProductListMaster();
  }

  async createProduct(productData) {
    try {
      const productId = await this.productListRepo.findByName(
        productData.typeOfproduct
      );
      productData = { ...productData, categoryId: productId };

      const newProduct = await productSchema.create(productData);
      console.log(newProduct.categoryId);

      logger.info(`Product ${DATA_SAVED_SUCCESSFULLY_1}`);
      return newProduct;
    } catch (error) {
      logger.info(`${REPOSITORY_LAYER_ERROR_MESSAGE}:${error}`);
      throw new RepositoryError(
        `${REPOSITORY_LAYER_ERROR}`,
        `${DATA_NOT_STORED}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async deleteProduct(productId) {
    try {
    } catch (error) {}
  }

  async findProduct(data) {
    try {
      const product = await productSchema.find(data);
      return product;
    } catch (error) {}
  }
}

module.exports = ProductRepository;
