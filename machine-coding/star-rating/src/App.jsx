import { useState } from "react";
import { StarRating } from "./components/StarRating";

export default function App() {
  const [rating, setRating] = useState(2);

  function handleChange(newRating) {
    setRating(newRating);
  }
  return <StarRating size={5} rating={rating} onChange={handleChange} />;
}
