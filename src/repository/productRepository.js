const logger = require("../logger");
const productSchema = require("../models/productModel");
const { StatusCodes } = require("http-status-codes");
const {
  DATA_SAVED_SUCCESSFULLY_1,
  REPOSITORY_LAYER_ERROR_MESSAGE,
  DATA_NOT_STORED,
  REPOSITORY_LAYER_ERROR,
} = require("../messageUtils/message");

class ProductRepository {
  constructor() {}

  async createProduct(productData) {
    try {
      const newProduct = await productSchema.create(productData);
      logger.info(`Product ${DATA_SAVED_SUCCESSFULLY_1}`);
      return newProduct;
    } catch (error) {
      logger.info(`${REPOSITORY_LAYER_ERROR_MESSAGE}:${error}`);
      throw new Repository(
        `${REPOSITORY_LAYER_ERROR}`,
        `${DATA_NOT_STORED}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = ProductRepository;
