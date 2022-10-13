const route = require("express").Router();

const{
    signup, hello, getAllUser, getAUser, updateUser, deleteUser
} = require("../controller/userControl");

route.post("/signup", signup);
route.get("/hello", hello);
route.get("/getAllUser", getAllUser);
route.get("/getAUser/:id", getAUser);
route.put("/updateUser/:id", updateUser);
route.delete("/deleteUser/:id", deleteUser);

module.exports = route;