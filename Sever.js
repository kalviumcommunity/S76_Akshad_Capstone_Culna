const express = require("express");
const app = express();
const PORT = 3000;

// Sample GET API
app.get("/api/data", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GET API is working successfully"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});