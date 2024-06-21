import { useState } from "react";

/*

The only part to point out is that when user hovers over any star, we will track its state using a state value 'hoveredRating' and apply the respective classes.
Rest is simple

*/
export const StarRating = ({ size = 5, rating, onChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  function handleHover(hoveredRating) {
    setHoveredRating(hoveredRating);
  }
  return (
    <div className="star-rating">
      {Array(size)
        .fill(null)
        .map((_, index) => {
          let classNames = ["star"];
          let currentStarValue = index + 1;

          if (hoveredRating >= currentStarValue) {
            classNames.push("hover");
          } else if (rating >= currentStarValue) {
            classNames.push("active");
          }

          return (
            <span
              key={index}
              className={classNames.join(" ")}
              onClick={() => onChange(currentStarValue)}
              onMouseEnter={() => handleHover(currentStarValue)}
              onMouseLeave={() => handleHover(0)}
            >
              &#9733;
            </span>
          );
        })}
    </div>
  );
};
