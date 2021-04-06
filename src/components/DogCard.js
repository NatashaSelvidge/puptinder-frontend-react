import React from "react";

function DogCard({ dog }) {
  console.log(dog);
  return (
    <div>
      <img src={dog.url} />
      <p>{dog.name}</p>
    </div>
  );
}

export default DogCard;
