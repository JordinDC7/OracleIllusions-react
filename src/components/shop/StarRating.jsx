import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import rockService from "../../service/shop";
import { toast } from "react-toastify";

function RockRating({ initialRating, onRatingChange, rockId }) {
  const [rating, setRating] = useState(initialRating || 0);
  const [hasRated, setHasRated] = useState(false);
  // console.log("this the rating:", rating);

  const changeRating = (newRating) => {
    if (!hasRated[rockId]) {
      // Check if the rock has already been rated
      setRating(newRating); // Update the rating state

      if (onRatingChange) {
        onRatingChange(newRating); // Call the callback with the new rating
      }

      insertStarRating(rockId)(newRating); // Proceed to insert the rating for the rock
    } else {
      console.log("definately firing else");
      toast.error("Sorry you have already rated that rock!");
    }
  };
  const insertStarRating = (rockId) => (newRating) => {
    console.log("New rating for rock ID", rockId, "is:", newRating);
    let payload = {
      rock_id: rockId,
      rating: newRating,
    };

    if (!hasRated[rockId]) {
      rockService
        .addRock(payload)
        .then(onInsertSuccess)
        .then(changeRatingStatus(rockId))
        .catch(onInsertError);
    }
  };

  const changeRatingStatus = (rockId) => {
    setHasRated((prevState) => ({
      ...prevState,
      [rockId]: true,
    }));
  };

  const onInsertSuccess = (response) => {
    console.log(response.data.item);
  };
  const onInsertError = (error) => {
    console.error(error);
  };
  return (
    <StarRatings
      rating={rating}
      starRatedColor={!hasRated[rockId] ? "gold" : "red"}
      starDimension="20px"
      changeRating={changeRating}
      numberOfStars={5}
      onRatingChange={insertStarRating(rockId)}
    />
  );
}

export default RockRating;
