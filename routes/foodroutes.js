const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

/*
GET 1️⃣ - Get all food items
*/
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: "Error fetching foods" });
  }
});

/*
GET 2️⃣ - Get food by ID
*/
router.get("/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: "Invalid ID" });
  }
});

/*
GET 3️⃣ - Filter by category
Example: /api/foods/category/veg
*/
router.get("/category/:category", async (req, res) => {
  try {
    const foods = await Food.find({ category: req.params.category });
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: "Error filtering foods" });
  }
});

module.exports = router;