const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

/*
CREATE FOOD (linked to User)
*/
router.post("/", async (req, res) => {
  try {
    const newFood = new Food(req.body);
    const savedFood = await newFood.save();

    res.status(201).json(savedFood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/*
GET ALL FOODS with USER DATA (populate)
*/
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find().populate("createdBy", "name email");
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*
GET FOODS BY USER
*/
router.get("/user/:userId", async (req, res) => {
  try {
    const foods = await Food.find({ createdBy: req.params.userId });
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;