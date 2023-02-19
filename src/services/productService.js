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

  #random(length = 8) {
    // Declare all characters
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Pick characers randomly
    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
  }

  #generateThumbnailImageUrl(productDataImage, productData) {
    const str = this.#random(5);
    const res = cloudinary.uploader.upload(productDataImage.path, {
      public_id: str,
      filename_override: Date.now(),
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
    return cloudinary.url(str);
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

  async updateData(imageFile, data) {
    try {
      const productWithPrviousData = await this.productRepository.findProduct({
        name: data.name,
      });
      if (imageFile !== undefined) {
        const thumbnailImageUrl = this.#generateThumbnailImageUrl(
          imageFile,
          data
        );
        data = { ...data, thumbNailImage: thumbnailImageUrl };
        // delete the previous image form cludinary
        const url = productWithPrviousData.thumbNailImage;
        await cloudinary.uploader.destroy(url, (response) => {
          console.log("Data deleted from cloudinary ", response);
        });
      }

      const product = await this.productRepository.updateProduct(
        productId[0]._id,
        data
      );
      return product;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(productId) {
    try {
      const product = await this.productRepository.deleteProduct(productId);
      return product;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
