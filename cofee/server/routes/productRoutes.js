const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET PRODUCTS (WITH CATEGORY FILTER)
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};
    if (category) {
      filter.category = category;
    }

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
