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
    thumbNailImage: {
      type: String,
    },
    description: {
      aboutProduct: {
        type: String,
        required: true,
      },
      ingrediants: {
        type: String,
        required: true,
      },
      allergens: {
        type: String,
        required: true,
      },
      storageAndConsumption: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
