const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const carRouter = require("./src/routes/car");
const cartRouter = require("./src/routes/cart");

require("./src/utils/database-conn");

const PORT = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/car", carRouter);
app.use("/cart", cartRouter);


app.listen(PORT);
