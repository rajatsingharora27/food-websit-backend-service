const productListSchema = require("../models/productListMaster");
const { REPOSITORY_LAYER_ERROR } = require("../messageUtils/message");
const { StatusCodes } = require("http-status-codes");

class ProductListMaster {
  async createProduct(data) {
    try {
      const product = await productListSchema.create(data);
      return product;
    } catch (error) {
      logger.error(`${REPOSITORY_LAYER_ERROR_MESSAGE} ${error}`);
      throw new Repository(
        `${REPOSITORY_LAYER_ERROR}`,
        `${"error in service"}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async deleteProduct(productId) {
    try {
      const product = await productListSchema.findByIdAndDelete(productId);
      return true;
    } catch (error) {
      logger.error(`${REPOSITORY_LAYER_ERROR_MESSAGE} ${error}`);
      throw new Repository(
        `${REPOSITORY_LAYER_ERROR}`,
        `${"error in service"}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getAllProducts() {
    try {
      const products = await productListSchema.find({});
      return products;
    } catch (error) {
      logger.error(`${REPOSITORY_LAYER_ERROR_MESSAGE} ${error}`);
      throw new Repository(
        `${REPOSITORY_LAYER_ERROR}`,
        `${"error in service"}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getSingleProdruct(productId) {
    try {
      const product = await productListSchema.findById(productId);
      return product;
    } catch (error) {
      logger.error(`${REPOSITORY_LAYER_ERROR_MESSAGE} ${error}`);
      throw new Repository(
        `${REPOSITORY_LAYER_ERROR}`,
        `${"error in service"}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateProduct(productId, updatedData) {
    try {
      const product = await productListSchema.findByIdAndUpdate(productId, {
        name: updatedData,
      });
    } catch (error) {
      logger.error(`${REPOSITORY_LAYER_ERROR_MESSAGE} ${error}`);
      throw new Repository(
        `${REPOSITORY_LAYER_ERROR}`,
        `${"error in service"}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = ProductListMaster;
