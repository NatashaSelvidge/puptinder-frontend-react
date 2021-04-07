import React from "react";

function DogCard({ dog }) {
  console.log(dog);
  return (
    <div>
      <img src={dog.image_url} height="100px" width="100px" alt={dog.name} />
      <p>{dog.name}</p>
    </div>
  );
}

export default DogCard;
