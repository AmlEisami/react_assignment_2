const cartModel = require("../models/cart");

module.exports = createCartList = async (cartCars) => {
  return await new cartModel({ cars: cartCars }).save();
};
