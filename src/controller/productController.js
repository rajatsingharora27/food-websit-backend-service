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

  updateProduct = async (req, res) => {
    try {
      const product = await this.productService.updateData(req.file, req.body);
      res.status(StatusCodes.CREATED).json({
        message: "Product Updated successfully",
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

  deleteProduct = async (req, res) => {
    try {
      console.log(req.params.id);

      const product = await this.productService.deleteProduct(req.params.id);
      res.status(StatusCodes.OK).json({
        message: "Product Deleted successfully",
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
