const carModel = require("../models/car");

module.exports = getAllcars = async () => {
  return await carModel.find({});
};
