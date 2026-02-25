const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Food = require("./models/Food");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Dynamic Port (IMPORTANT for Render)
const PORT = process.env.PORT || 3000;

// ✅ MongoDB Connection (Use Atlas for Render)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

// =========================
// GET - Get all foods
// =========================
app.get("/api/foods", async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: "Error fetching foods" });
  }
});

// =========================
// POST - Add new food
// =========================
app.post("/api/foods", async (req, res) => {
  try {
    const newFood = new Food(req.body);
    const savedFood = await newFood.save();

    res.status(201).json({
      success: true,
      message: "Food added successfully",
      data: savedFood
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error adding food"
    });
  }
});

// =========================
// PUT - Update food
// =========================
app.put("/api/foods/:id", async (req, res) => {
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
      message: "Food updated successfully",
      data: updatedFood
    });
  } catch (error) {
    res.status(400).json({ message: "Error updating food" });
  }
});

// =========================
// DELETE - Remove food
// =========================
app.delete("/api/foods/:id", async (req, res) => {
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
    res.status(400).json({ message: "Error deleting food" });
  }
});

// Root Route
app.get("/", (req, res) => {
  res.send("Culna Backend Server Running 🚀");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});