import React from "react";
import DogCard from "./DogCard";

const NextUpDog = ({ dogs }) => {
  const dogCards = dogs.map((dog) => <DogCard key={dog.id} dog={dog} />);

  return <div className="NextUpDog">{dogCards}</div>;
};
export default NextUpDog;
