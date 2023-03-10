const logger = require("../logger");
const productSchema = require("../models/productModel");
const { StatusCodes } = require("http-status-codes");
const {
  DATA_SAVED_SUCCESSFULLY_1,
  REPOSITORY_LAYER_ERROR_MESSAGE,
  DATA_NOT_STORED,
  REPOSITORY_LAYER_ERROR,
  DATA_NOT_UPDATED,
  DATA_NOT_PRESENT,
} = require("../messageUtils/message");
const RepositoryError = require("../Error/repositoryError");
const ProductListMaster = require("./productCategoryRepository");

class ProductRepository {
  constructor() {
    this.productListRepo = new ProductListMaster();
  }

  async createProduct(productData) {
    try {
      //get the product ID from ProductListMasterRepository
      const productId = await this.productListRepo.findByName(
        productData.typeOfproduct
      );
      //assiging the product ID to the new product
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
      const deletedData = await productSchema.findByIdAndDelete(productId);
      return deletedData;
    } catch (error) {
      logger.info(`${REPOSITORY_LAYER_ERROR_MESSAGE}:${error}`);
      throw new RepositoryError(
        `${REPOSITORY_LAYER_ERROR}`,
        `${DATA_NOT_PRESENT}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findProduct(productId) {
    try {
      const product = await productSchema.find(productId);
      return product;
    } catch (error) {
      logger.info(`${REPOSITORY_LAYER_ERROR_MESSAGE}:${error}`);
      throw new RepositoryError(
        `${REPOSITORY_LAYER_ERROR}`,
        `${DATA_NOT_PRESENT}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAllProducts() {
    try {
      const products = await productSchema.find();
      return products;
    } catch (error) {
      logger.info(`${REPOSITORY_LAYER_ERROR_MESSAGE}:${error}`);
      throw new RepositoryError(
        `${REPOSITORY_LAYER_ERROR}`,
        `${DATA_NOT_PRESENT}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateProduct(productId, productData) {
    try {
      const updateProduct = await productSchema.findByIdAndUpdate(
        productId,
        productData,
        { new: true }
      );
      return updateProduct;
    } catch (error) {
      logger.info(`${REPOSITORY_LAYER_ERROR_MESSAGE}:${error}`);
      throw new RepositoryError(
        `${REPOSITORY_LAYER_ERROR}`,
        `${DATA_NOT_UPDATED}`,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = ProductRepository;
