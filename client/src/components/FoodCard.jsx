function FoodCard({ food }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <h3>{food.name}</h3>
      <p>Category: {food.category}</p>
      <p>Price: ₹{food.price}</p>
    </div>
  );
}

export default FoodCard;