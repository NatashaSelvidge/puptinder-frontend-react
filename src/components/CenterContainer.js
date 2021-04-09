import React from "react";
import Dogs from "./Dogs";
import DisplayDog from "./DisplayDog";
import NextUpDog from "./NextUpDog";
import FormData from "./FormData";

const CenterContainer = (props) => {
  return (
    <div className="CenterContainer">
      <DisplayDog dog={props.dogs[0]} handleLikeClick={props.handleLikeClick} />

      <NextUpDog dogs={props.dogs.slice(0, 3)} />

      <FormData />
    </div>
  );
};
export default CenterContainer;
