import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://your-render-backend.onrender.com/api/foods")
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {foods.map(food => (
        <FoodCard key={food._id} food={food} />
      ))}
    </div>
  );
}

export default FoodList;