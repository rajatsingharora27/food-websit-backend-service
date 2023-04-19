const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/server-config");
const { connectDB } = require("./config/database-config");
const ProductRepository = require("./repository/productRepository");
const logger = require("./logger/index");
const apiRoutes = require("./router/index");
const cors = require("cors");
const Client = require("twilio");
// const client = require('twilio')(accountSid, authToken);

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

  // const accountSid = "ACca09c6c2ce48aff4095164da5a896eb3";
  // const authToken = "1cf6adaf2e3b6f11c4c7c83232826244";
  // const client = new Client(accountSid, authToken);

  // client.messages
  //   .create({
  //     body: "Test ----- Your Yummy Cupcakes Company order of 1 dozen frosted cupcakes has shipped and should be delivered on July 10, 2019. Details: http://www.yummycupcakes.com/",
  //     from: "whatsapp:+14155238886",
  //     to: "whatsapp:+919078802386",
  //   })
  //   .then((message) => console.log("Message sent: ", message.sid))
  //   .catch((error) => console.log(error));
};

server();
