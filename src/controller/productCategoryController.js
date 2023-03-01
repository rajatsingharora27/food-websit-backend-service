const { StatusCodes } = require("http-status-codes");
const { ProductCategoryService } = require("../services/index");
const productCategory = require("../models/productCategory");
class ProductController {
  constructor() {
    this.productCategory = new ProductCategoryService();
  }

  createCategory = async (req, res) => {
    try {
      const category = await this.productCategory.createCategory(req.body);

      res.status(StatusCodes.CREATED).json({
        message: "Product created successfully",
        data: category,
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

  getAllCategory = async (req, res) => {
    try {
      const category = await this.productCategory.getAllCategories();

      res.status(StatusCodes.CREATED).json({
        message: "Product created successfully",
        data: category,
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

  filterCriteria = async (req, res) => {
    try {
      console.log(req.query);
      const categoryNames = req.query.name;
      console.log(categoryNames);

      const result = await productCategory.find({
        name: { $in: categoryNames },
      });

      res.status(StatusCodes.CREATED).json({
        message: "List of selected category",
        data: result,
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

  //   updateCategory = async (req, res) => {
  //     try {
  //       const product = await this.productCategory.updateCategory(req.file, req.body);
  //       res.status(StatusCodes.CREATED).json({
  //         message: "Product Updated successfully",
  //         data: product,
  //         error: {},
  //       });
  //     } catch (error) {
  //       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
  //         message: error.name,
  //         data: {},
  //         error: error,
  //       });
  //     }
  //   };

  //   deleteProduct = async (req, res) => {
  //     try {
  //       console.log(req.params.id);

  //       const product = await this.productService.deleteProduct(req.params.id);
  //       res.status(StatusCodes.OK).json({
  //         message: "Product Deleted successfully",
  //         data: product,
  //         error: {},
  //       });
  //     } catch (error) {
  //       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
  //         message: error.name,
  //         data: {},
  //         error: error,
  //       });
  //     }
  //   };
}

module.exports = ProductController;
