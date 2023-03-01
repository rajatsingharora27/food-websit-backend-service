const express = require("express");
const {
  LoginController,
  ProductController,
  ProductCategoryController,
  OrderController,
} = require("../../controller/index");
const upload = require("../../middlewares/multer");
const router = express.Router();

const loginController = new LoginController();
const productController = new ProductController();
const productCategoryController = new ProductCategoryController();
const orderController = new OrderController();

router.get("/login", loginController.loginUser);

//----Create Product----

router.post("/addProduct", upload, productController.createProduct);
router.patch("/updateProduct", upload, productController.updateProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);
router.post("/uploadImage", upload, productController.uploadImage);

//---- Category-----

router.post("/addCategory", productCategoryController.createCategory);
router.get("/allCategory", productCategoryController.getAllCategory);
router.get("/filterCategory", productCategoryController.filterCriteria);

//----- Orders-----

router.get("/orders", orderController.getAllOrders);

module.exports = router;
