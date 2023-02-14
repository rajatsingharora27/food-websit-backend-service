const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/server-config");
const connectDB = require("./config/database-config");
const ProductRepository = require("./repository/productRepository");
const logger = require("./logger/index");

const productRepo = new ProductRepository();
const server = async () => {
  app.use(bodyParser.json());
  await connectDB();
  app.listen(3002, () => {
    logger.info(`Server started at port ${PORT}`);
  });
  // productRepo.createProduct({
  //   name: "french cake",
  //   price: "100",
  //   quantity: 10,
  // });
};

server();
