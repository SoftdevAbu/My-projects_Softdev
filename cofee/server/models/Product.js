const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String,
  featured: Boolean
});

module.exports = mongoose.model("Product", ProductSchema);
