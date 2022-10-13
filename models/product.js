const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ProductSchema = new Schema(
    {
        name:{
            type: String,
            require: true,
        },

        type:{
            type: String,
            require: true,
        },

        price:{
            type: Number,
            require: true,
        },
        stock:{
            type: Number,
            require: true,
        },
    },
    {
        timestamps: true,
        collection: "product",
    }
);

module.exports = mongoose.model("product", ProductSchema)