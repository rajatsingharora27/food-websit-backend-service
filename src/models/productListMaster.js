const { default: mongoose } = require("mongoose");

const productListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("ProductList", productListSchema);
