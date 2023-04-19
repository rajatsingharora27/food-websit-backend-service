const mongoose = require("mongoose");
const logger = require("../logger");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect("mongodb://127.0.0.1:27017/Tuileries-dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      logger.info("Database connected");
    })

    .catch((err) => logger.error(`Error connecting to database: ${err}`));
};

const orderCollection = () => {
  let coll = mongoose.connection.db.collection("orders");
  return coll;
};

module.exports = { connectDB, orderCollection };
