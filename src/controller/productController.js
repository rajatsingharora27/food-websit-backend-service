const { StatusCodes } = require("http-status-codes");
const { ProductService } = require("../services/index");
class ProductController {
  constructor() {
    this.productService = new ProductService();
  }

  createProduct = async (req, res) => {
    try {
      const product = await this.productService.create(req.file, req.body);

      res.status(StatusCodes.CREATED).json({
        message: "Product created successfully",
        data: product,
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: error.name,
        data: {},
        error: error,
      });
    }
  };
}

module.exports = ProductController;
