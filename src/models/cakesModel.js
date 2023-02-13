const mongoose = require("mongoose");

const cakeSchema = new mongoose.Schema(
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
    quatity: {
      type: Number,
      required: true,
    },
    speacialDay: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cake", cakeSchema);
