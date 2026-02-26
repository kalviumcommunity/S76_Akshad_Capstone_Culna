// ==========================
// IMPORTS
// ==========================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const foodRoutes = require("./routes/foodroutes");

// ==========================
// APP INIT
// ==========================
const app = express();

app.use(cors());
app.use(express.json());

// ==========================
// ROOT ROUTE
// ==========================
app.get("/", (req, res) => {
  console.info("[SERVER] Root endpoint accessed");
  res.send("Culna Backend Server Running 🚀");
});

// ==========================
// API ROUTES
// ==========================
app.use("/api/foods", foodRoutes);

// ==========================
// 404 HANDLER
// ==========================
app.use((req, res) => {
  console.warn(`[404] Route not found: ${req.originalUrl}`);
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

// ==========================
// SERVER + DB START
// ==========================
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.info("[DB] MongoDB Connected Successfully");

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.info(`[SERVER] Running on port ${PORT}`);
    });

  } catch (error) {
    console.error(`[FATAL ERROR] ${error.message}`);
    process.exit(1);
  }
};

startServer();