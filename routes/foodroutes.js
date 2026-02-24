/*
PUT 1️⃣ - Update full food item by ID
*/
router.put("/:id", async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedFood) {
      return res.status(404).json({
        success: false,
        message: "Food not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Food updated successfully",
      data: updatedFood
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error updating food item"
    });
  }
});