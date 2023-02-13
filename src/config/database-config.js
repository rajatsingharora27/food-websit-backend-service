const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/cake", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected");
    })

    .catch((err) => console.log(`Error connecting to database: ${err}`));
};

module.exports = connectDB;
