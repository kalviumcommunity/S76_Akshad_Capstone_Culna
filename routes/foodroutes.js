const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

/*
POST 1️⃣ - Add new food item
*/
router.post("/", async (req, res) => {
  try {
    const newFood = new Food(req.body);
    const savedFood = await newFood.save();

    res.status(201).json({
      success: true,
      message: "Food item created successfully",
      data: savedFood
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error creating food item"
    });
  }
});

/*
POST 2️⃣ - Bulk add foods
*/
router.post("/bulk", async (req, res) => {
  try {
    const foods = await Food.insertMany(req.body);

    res.status(201).json({
      success: true,
      message: "Bulk food items added",
      data: foods
    });
  } catch (error) {
    res.status(400).json({
      message: "Error in bulk insert"
    });
  }
});

module.exports = router;