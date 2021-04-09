import React from "react";
import DogCard from "./DogCard";

function Dogs({ dogs }) {
  const dogCards = dogs.map((dog) => <DogCard key={dog.id} dog={dog} />);
  
  return <div className="Dogs">{dogCards}</div>;
}

export default Dogs;
