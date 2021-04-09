import React from "react";
import DogCard from "./DogCard";

function LikedDogs({ dogs, handleChangeOfHeart }) {
  const dogCards = dogs.map((dog) => (
    <DogCard handleChangeOfHeart={handleChangeOfHeart} key={dog.id} dog={dog} />
  ));
  return (
    <div className="LikedDogs">
      <h2>Liked</h2>
      {dogCards}
    </div>
  );
}

export default LikedDogs;
