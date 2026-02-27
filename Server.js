const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const foodRoutes = require("./routes/foodroutes");

const app = express();

app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Culna Backend Running 🚀");
});

// API Routes
app.use("/api/foods", foodRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.info("[DB] MongoDB Connected Successfully");

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.info(`[SERVER] Running on port ${PORT}`);
    });

  } catch (error) {
    console.error("[FATAL ERROR]", error.message);
    process.exit(1);
  }
};

app.use("/uploads", express.static("uploads"));
startServer();