const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/server-config");
const { connectDB } = require("./config/database-config");
const ProductRepository = require("./repository/productRepository");
const logger = require("./logger/index");
const apiRoutes = require("./router/index");
const cors = require("cors");
// const { OrderService } = require("./services/index");

const { ProductListMasterRepository } = require("./repository");
const {
  LoginService,
  ProductService,
  OrderService,
} = require("./services/index");
const { default: mongoose } = require("mongoose");

// const productLisSchema = require("../src/models/productListMaster");
const productRepo = new ProductRepository();
// const productList = new ProductListMasterRepository();
const loginService = new LoginService();
const productService = new ProductService();

const orderService = new OrderService();

const server = async () => {
  app.use(cors());

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

  // const data = await productService.deleteProduct("63edcf7b5472e5daef7bb890");

  // console.log(data);

  // const orderSchema = new mongoose.Schema({});
  // const Order = mongoose.model("Order", orderSchema, "orders");
  // const result = await Order.findOne({ customerName: "rohit" });
  // console.log(result);
  // let filter = { customerName: "Fur Rajat" };
  // let q = { customerName: "Rajat" };

  // let coll = mongoose.connection.db.collection("orders");
  // let data = await coll.findOneAndUpdate(
  //   filter,
  //   { $set: { customerName: "Rajat" } },
  //   {
  //     new: true,
  //   }
  // );

  // console.log(data);
  // const ans = await orderService.findAllOrders();
  // console.log(ans);
};

server();
