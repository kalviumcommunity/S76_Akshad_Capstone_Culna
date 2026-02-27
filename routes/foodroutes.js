router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newFood = new Food({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      createdBy: req.body.createdBy,
      image: req.file ? req.file.filename : null
    });

    const savedFood = await newFood.save();

    res.status(201).json(savedFood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});