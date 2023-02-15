const logger = require("../logger");
const { ProductListMasterRepository } = require("../repository/index");
const { SERVICE_LAYER_ERROR } = require("../messageUtils/message");

/**
 *  This service will be used for making the 
 *  product List avialabe to the store 
 *  for eg: store can have the following categories:
        cake,
        biscuits etc.
 * 
 * 
 */

class ProductListService {
  constructor() {
    this.productListMasterRepository = new ProductListMasterRepository();
  }

  async createProduct(data) {
    try {
      const product = await this.productListMasterRepository.createProduct(
        data
      );
      return product;
    } catch (error) {
      logger.error(`${SERVICE_LAYER_ERROR} ${error}`);
      throw new Repository(
        `${SERVICE_LAYER_ERROR}`,
        `${"error in service"}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async deleteProduct(productId) {
    try {
      const product = await this.productListMasterRepository.deleteProduct(
        productId
      );
      return product;
    } catch (error) {
      logger.error(`${SERVICE_LAYER_ERROR} ${error}`);
      throw new Repository(
        `${SERVICE_LAYER_ERROR}`,
        `${"error in service"}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = ProductListService;
