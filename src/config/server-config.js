const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  NODE_DEV_ENV: process.env.NODE_DEV_ENV,
};
