const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model("cart", new Schema(
  {
    cars: [],
  },
  {
    collection: "cart",
  }
));
