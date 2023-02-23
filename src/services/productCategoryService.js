const logger = require("../logger");
const { ProductCategory } = require("../repository/index");
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

class ProductCategoryService {
  constructor() {
    this.productCategory = new ProductCategory();
  }

  async createCategory(data) {
    try {
      const category = await this.productCategory.createCategory(data);
      return category;
    } catch (error) {
      logger.error(`${SERVICE_LAYER_ERROR} ${error}`);
      throw error;
    }
  }

  async getAllCategories() {
    try {
      const category = await this.productCategory.getAllCategory();
      return category;
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
      const category = await this.productCategory.deleteProduct(productId);
      return category;
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
module.exports = ProductCategoryService;
