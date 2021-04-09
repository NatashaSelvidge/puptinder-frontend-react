import React from "react";

function DogCard({ dog, handleChangeOfHeart }) {
  let returnVal;
  if (dog) {
    
    returnVal = (
      <div className="DogCard">
        <img
          className={dog.id}
          onClick={handleChangeOfHeart}
          src={dog.image_url}
          alt={dog.name}
        />
        <p>{dog.name}</p>
      </div>
    );
  } else {
    returnVal = <div className="DogCard">"Loading"</div>;
  }
  return returnVal;
}

export default DogCard;
