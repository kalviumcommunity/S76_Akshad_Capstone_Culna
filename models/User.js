// ==========================
// IMPORTS
// ==========================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import Routes
const foodRoutes = require("./routes/foodroutes");

// ==========================
// INITIALIZE APP
// ==========================
const app = express();

// ==========================
// MIDDLEWARE
// ==========================
app.use(cors());
app.use(express.json());

// ==========================
// DATABASE CONNECTION
// ==========================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed:", error);
  });

// ==========================
// ROUTES
// ==========================

// Root route
app.get("/", (req, res) => {
  res.send("Culna Backend Server Running Successfully 🚀");
});

// Food routes
app.use("/api/foods", foodRoutes);

// ==========================
// ERROR HANDLING MIDDLEWARE
// ==========================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

// ==========================
// SERVER START
// ==========================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});