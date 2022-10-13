const { config } = require("dotenv");
const PRODUCT = require("../models/product")

exports.addProduct = (req, res) => {
    const { name, tye, price, stock } = req.body;
    PRODUCT.create({
        name, tye, price, stock
    });
    res.status(200).json({
        success: true,
        data: req.body,
    });
};

exports.getAllProduct = async (req, res) => {
    try {
      const product = await PRODUCT.find();
      res.status(200).json(product);
      console.log(product);
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

exports.getAProduct = async (req, res) => {
    try {
      const product = await PRODUCT.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
};

exports.updateProduct = async (req, res) => {
    try {
      await PRODUCT.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json("sucsess");
      console.log("thanh cong");
    } catch (err) {
      res.status(500).json(err);
    }
};

exports.deleteProduct = async (req, res) => {
    try {
      await PRODUCT.findByIdAndDelete(req.params.id);
      res.status(200).json("sucsess");
      console.log("thanh cong");
    } catch (err) {
      res.status(500).json(err);
    }
};