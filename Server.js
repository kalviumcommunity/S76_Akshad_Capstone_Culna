const express = require("express");
const mongoose = require("mongoose");
const foodRoutes = require("./routes/foodroutes");

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/foodDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/foods", foodRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});