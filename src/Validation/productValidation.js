const productSchema = require("../models/productModel");

const isProductAlredyCreated = async (productData) => {
  const productFromDb = await productSchema.findOne({ name: productData.name });
  if (productFromDb !== null) {
    return true;
  }
  console.log(productFromDb);
};

module.exports = isProductAlredyCreated;
