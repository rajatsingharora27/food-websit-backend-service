const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/server-config");
const connectDB = require("./config/database-config");

const server = async () => {
  app.use(bodyParser.json());
  await connectDB();
  app.listen(3002, () => {
    console.log(`Server started at port ${PORT}`);
  });
};

server();
