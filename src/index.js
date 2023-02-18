const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/server-config");
const connectDB = require("./config/database-config");
const ProductRepository = require("./repository/productRepository");
const logger = require("./logger/index");
const apiRoutes = require("./router/index");
const { ProductListMasterRepository } = require("./repository");
const { LoginService, ProductService } = require("./services/index");

const productLisSchema = require("../src/models/productListMaster");
const productRepo = new ProductRepository();
const productList = new ProductListMasterRepository();
const loginService = new LoginService();
const productService = new ProductService();

const server = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  await connectDB();
  app.listen(PORT, () => {
    logger.info(`Server started at port ${PORT}`);
  });
  // productList.createProduct({
  //   name: "cake",
  // });

  // productRepo.updateProduct({
  //   name: "pineapple cake",
  //   price: "100",
  //   quantity: 10,
  //   typeOfproduct: "cake",
  // });
  // const res = await productRepo.findProduct({
  //   category: "63ebc63cdb27ab6c03b3b61f",
  // });
  // console.log(res);

  // get user
  // const user = await loginService.loginUser({
  //   email: "rajatsingharora96@gmail.com",
  //   password: "Rajatsingh13",
  // });
  // console.log(user);

  // const data = await productService.updateData({
  //   name: "pineapple cake",
  //   price: "100",
  //   quantity: 5,
  //   typeOfproduct: "cake",
  // });

  // console.log(data);
};

server();
