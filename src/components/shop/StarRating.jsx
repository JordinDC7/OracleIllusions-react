import React, { useState } from "react";
import StarRatings from "react-star-ratings";

function StarRating({ initialRating, onRatingChange }) {
  const [rating, setRating] = useState(initialRating || 0);

  const changeRating = (newRating) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
    //need a update call to db to add star rating
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

export default StarRating;
