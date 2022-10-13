require("dotenv").config();
require("./connectMongo");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const UserRoute = require("./routes/userRoute");
const { getAllUser } = require("./controller/userControl");
const ProductRoute = require("./routes/productRoute");
const { getAllProduct } = require("./controller/productControl");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api", UserRoute);
app.use("/api", ProductRoute);

const PORT = 5500 || 8000;
app.listen(PORT, () => {
  console.log("server is running on port: " + PORT);
});
