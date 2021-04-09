import React from "react";
import DogCard from "./DogCard";

const DislikedDogs = ({ dogs, handleChangeOfHeart }) => {
  const dogCards = dogs.map((dog) => (
    <DogCard handleChangeOfHeart={handleChangeOfHeart} key={dog.id} dog={dog} />
  ));
  return (
    <div className="DislikedDogs">
      <h2>Disliked</h2>

      {dogCards}
    </div>
  );
};

export default DislikedDogs;
