const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

// GET all foods
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    console.error("[GET /foods ERROR]", error.message);
    res.status(500).json({ message: "Failed to fetch foods" });
  }
});

// POST new food
router.post("/", async (req, res) => {
  try {
    const newFood = new Food(req.body);
    const savedFood = await newFood.save();

    res.status(201).json({
      success: true,
      data: savedFood
    });
  } catch (error) {
    console.error("[POST /foods ERROR]", error.message);
    res.status(400).json({ message: "Failed to create food" });
  }
});

// PUT update food
router.put("/:id", async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({
      success: true,
      data: updatedFood
    });
  } catch (error) {
    console.error("[PUT /foods ERROR]", error.message);
    res.status(400).json({ message: "Failed to update food" });
  }
});

// DELETE food
router.delete("/:id", async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);

    if (!deletedFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({
      success: true,
      message: "Food deleted successfully"
    });
  } catch (error) {
    console.error("[DELETE /foods ERROR]", error.message);
    res.status(400).json({ message: "Failed to delete food" });
  }
});

module.exports = router;