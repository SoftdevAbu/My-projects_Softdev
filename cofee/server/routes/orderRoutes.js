const router = require("express").Router();
const Order = require("../models/Order");
const auth = require("../middleware/authMiddleware");

// GET USER ORDERS
router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// CREATE NEW ORDER (CHECKOUT)
router.post("/", auth, async (req, res) => {
  try {
    const { items, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = new Order({
      userId: req.userId,
      items,
      total
    });

    await order.save();

    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to place order" });
  }
});

module.exports = router;
