const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

/*
=============================
GET ALL FOODS (DB CALL)
=============================
*/
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find(); // DB call
    res.status(200).json(foods);
  } catch (error) {
    console.error("[GET ERROR]", error.message);
    res.status(500).json({ message: "Failed to fetch foods" });
  }
});

/*
=============================
GET SINGLE FOOD BY ID
=============================
*/
router.get("/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id); // DB call

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json(food);
  } catch (error) {
    console.error("[GET BY ID ERROR]", error.message);
    res.status(400).json({ message: "Invalid ID" });
  }
});

/*
=============================
POST CREATE FOOD
=============================
*/
router.post("/", async (req, res) => {
  try {
    const newFood = new Food(req.body);
    const savedFood = await newFood.save(); // DB save

    res.status(201).json(savedFood);
  } catch (error) {
    console.error("[POST ERROR]", error.message);
    res.status(400).json({ message: "Failed to create food" });
  }
});

/*
=============================
PUT UPDATE FOOD
=============================
*/
router.put("/:id", async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ); // DB update

    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json(updatedFood);
  } catch (error) {
    console.error("[PUT ERROR]", error.message);
    res.status(400).json({ message: "Failed to update food" });
  }
});

/*
=============================
DELETE FOOD
=============================
*/
router.delete("/:id", async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id); // DB delete

    if (!deletedFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({ message: "Food deleted successfully" });
  } catch (error) {
    console.error("[DELETE ERROR]", error.message);
    res.status(400).json({ message: "Failed to delete food" });
  }
});

module.exports = router;