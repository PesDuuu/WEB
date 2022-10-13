const route = require("express").Router();

const{
    addProduct, hello, getAllProduct, getAProduct, updateProduct, deleteProduct
} = require("../controller/productControl");

route.post("/addProduct", addProduct);
route.get("/hello", hello);
route.get("/getAllProduct", getAllProduct);
route.get("/getAProduct/:id", getAProduct);
route.put("/updateProduct/:id", updateProduct);
route.delete("/deleteProduct/:id", deleteProduct);

module.exports = route;