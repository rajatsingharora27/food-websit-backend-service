const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    tagLine: {
      type: String,
    },
    storageDuration: {
      type: String,
    },
    tags: {
      type: Array,
    },
    quantity: {
      type: Number,
      required: true,
    },
    speacialDay: {
      type: String,
    },
    typeOfproduct: {
      type: String,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
