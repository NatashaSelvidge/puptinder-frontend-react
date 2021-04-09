import React from "react";
import DogCard from "./DogCard";

function DisplayDog({ dog, handleLikeClick }) {
  const style = {
    borderStyle: "solid",
    borderColor: "blue",
    borderWidth: "1px",
  };
  return (
    <div style={style} className="DisplayDog">
      <DogCard size={{ maxHeight: 300, maxWidth: 300 }} dog={dog} />
      <button
        id={dog ? dog.id : "no dog"}
        onClick={handleLikeClick}
        className="like-button"
      >
        Like
      </button>
      <button
        id={dog ? dog.id : "no dog"}
        onClick={handleLikeClick}
        className="dislike-button"
      >
        Dislike
      </button>
    </div>
  );
}
export default DisplayDog;
