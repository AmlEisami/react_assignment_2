const express = require("express");
const router = express.Router();
const createCartList = require("../controllers/cart");

router.post("/", (req, res) => {
  res.send(createCartList(req.body.cars));
});

module.exports = router;
