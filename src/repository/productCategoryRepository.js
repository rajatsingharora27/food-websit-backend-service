const productCategory = require("../models/productCategory");
const { REPOSITORY_LAYER_ERROR_MESSAGE } = require("../messageUtils/message");
const { StatusCodes } = require("http-status-codes");
const logger = require("../logger");
const RepositoryError = require("../Error/repositoryError");

class ProductCategory {
  async createCategory(data) {
    try {
      const category = await productCategory.create(data);
      return category;
    } catch (error) {
      if (error.code === 11000) {
        logger.error(
          `${REPOSITORY_LAYER_ERROR_MESSAGE} ${`duplicate data value ${data.name}`}`
        );
        throw new RepositoryError(
          `${REPOSITORY_LAYER_ERROR_MESSAGE}`,
          `${`duplicate data value ${data.name}`}`,
          StatusCodes.INTERNAL_SERVER_ERROR
        );
      }
      logger.error(`${REPOSITORY_LAYER_ERROR_MESSAGE} ${error}`);

      throw new RepositoryError(
        `${REPOSITORY_LAYER_ERROR_MESSAGE}`,
        `${"error in service"}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async deleteCategory(productId) {
    try {
      const category = await productCategory.findByIdAndDelete(productId);
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

  async getAllCategory() {
    try {
      const category = await productCategory.find({});
      return category;
    } catch (error) {
      logger.error(`${REPOSITORY_LAYER_ERROR_MESSAGE} ${error}`);
      throw new Repository(
        `${REPOSITORY_LAYER_ERROR}`,
        `${"error in service"}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getSingleCategory(productId) {
    try {
      const category = await productCategory.findById(productId);
      return category;
    } catch (error) {
      logger.error(`${REPOSITORY_LAYER_ERROR_MESSAGE} ${error}`);
      throw new Repository(
        `${REPOSITORY_LAYER_ERROR}`,
        `${"error in service"}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateCategory(productId, updatedData) {
    try {
      const category = await productCategory.findByIdAndUpdate(productId, {
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

  async findByName(productName) {
    try {
      const category = await productCategory.findOne({ name: productName });
      return category._id;
    } catch (error) {}
  }
}

module.exports = ProductCategory;
