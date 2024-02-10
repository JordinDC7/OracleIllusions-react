import React, { useState } from "react";
import StarRatings from "react-star-ratings";

function RockRating({ initialRating, onRatingChange }) {
  const [rating, setRating] = useState(initialRating || 0);

  const changeRating = (newRating) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <StarRatings
      rating={rating}
      starRatedColor="gold"
      starDimension="20px"
      changeRating={changeRating}
      numberOfStars={5}
      name="rockRating"
    />
  );
}

export default RockRating;
