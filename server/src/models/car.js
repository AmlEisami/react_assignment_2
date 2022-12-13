const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model("car", new Schema(
  {
    _id: String,
    name: String,
    price: Number,
    desc: String,
    imgae: String,
  },
  {
    collection: "car",
  }
));
