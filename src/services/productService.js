const { StatusCodes } = require("http-status-codes");
const ValidationError = require("../Error/validationError");
const logger = require("../logger");
const { ProductRepository } = require("../repository/index");
const { isProductAlredyCreated } = require("../Validation/index");
const cloudinary = require("../config/cloudinary");

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

  #generateThumbnailImageUrl(productDataImage, productData) {
    const res = cloudinary.uploader.upload(productDataImage.path, {
      public_id: `${productData.name}`,
    });

    res
      .then((data) => {
        console.log(data);
        console.log(data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });

    // Generate
    return cloudinary.url(`${productData.name}`);
  }

  async create(productDataImage, productData) {
    try {
      // check if the product already exists
      //check if the product with same name already exists

      const isProductThere = await isProductAlredyCreated(productData);
      if (isProductThere) {
        logger.info("Product already exists");
        throw new ValidationError(
          "Validation Error",
          `${productData.name} already exists`,
          StatusCodes.BAD_REQUEST
        );
      }
      const thumbnailImageUrl = this.#generateThumbnailImageUrl(
        productDataImage,
        productData
      );
      const product = await this.productRepository.createProduct({
        ...productData,
        thumbNailImage: thumbnailImageUrl,
      });
      return product;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
