const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect("mongodb://127.0.0.1:27017/Tuileries-dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected");
    })

    .catch((err) => console.log(`Error connecting to database: ${err}`));
};

const orderCollection = () => {
  let coll = mongoose.connection.db.collection("orders");
  return coll;
};

module.exports = { connectDB, orderCollection };
