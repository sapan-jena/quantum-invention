import React from "react";
import "../styles.css";

export default function Rating() {
  const ratingList = [1, 2, 3, 4, 5];
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  return (
    <>
      {ratingList.map((data, index) => {
        index += 1;
        return (
          <button
            key={index}
            type="button"
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            className={index <= (hover || rating) ? "on" : "off"}
          >
            &#9733;
          </button>
        );
      })}
    </>
  );
}
