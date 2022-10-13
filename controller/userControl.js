const USER = require("../models/user")

exports.signup = (req, res) => {
    const { name, email, phone, password, carts } = req.body;
    USER.create({
        name, email, phone, password, carts
    });
    res.status(200).json({
        success: true,
        data: req.body,
    });
};

exports.getAllUser = async (req, res) => {
    try {
      const user = await USER.find();
      res.status(200).json(user);
      console.log(user);
    } catch (err) {
      res.status(500).json(err);
    }
};

exports.hello = (req, res) => {
    res.status(200).json({
      success: true,
      mes: "hello",
    });
};

exports.getAUser = async (req, res) => {
    try {
      const user = await USER.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
};

exports.updateUser = async (req, res) => {
    try {
      await USER.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json("sucsess");
      console.log("thanh cong");
    } catch (err) {
      res.status(500).json(err);
    }
};

exports.deleteUser = async (req, res) => {
    try {
      await USER.findByIdAndDelete(req.params.id);
      res.status(200).json("sucsess");
      console.log("thanh cong");
    } catch (err) {
      res.status(500).json(err);
    }
};