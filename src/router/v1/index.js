const express = require("express");
const {
  LoginController,
  ProductController,
} = require("../../controller/index");
const upload = require("../../middlewares/multer");
const router = express.Router();

const loginController = new LoginController();
const productController = new ProductController();

router.get("/login", loginController.loginUser);

//----Create Product----

router.post("/addProduct", upload, productController.createProduct);
router.patch("/updateProduct", upload, productController.updateProduct);

module.exports = router;
