const express = require("express");
const router = express.Router();
const getAllcars = require("../controllers/car");

router.get("/", async (req, res) => {
  res.send(await getAllcars());
});

module.exports = router;
