const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Food name is required"],
      trim: true
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0
    },
    category: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema);