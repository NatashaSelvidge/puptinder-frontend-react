import React, { Component } from "react";
import "./App.css";
import Dogs from "./components/Dogs";
import CenterContainer from "./components/CenterContainer";

import LikedDogs from "./components/LikedDogs";
import DislikedDogs from "./components/DislikedDogs";
import dogs from "./dogs-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    this.setState({
      dogs: dogs,
    });
  }
  //mocking fetch request
  // componentDidMount() {
  //   const imgURL = "https://dog.ceo/api/breeds/image/random/50";
  //   fetch(imgURL)
  //     .then((r) => r.json())
  //     .then((dogs) => this.setState({ dogs: dogs }));
  // }

  handleLikeClick = (e) => {
    //change the state of cat stutus to liked
    let newStatus;
    if (e.target.tagName == "IMG") {
      newStatus = "undecided";
    } else {
      newStatus = e.target.className == "like-button" ? "liked" : "disliked";
    }
    const dogs = this.state.dogs.map((dog) => {
      if (dog.id == e.target.id || dog.id == e.target.className) {
        // option dog.status = "liked";
        const newDog = Object.assign({}, dog);
        newDog.status = newStatus;
        return newDog;
      } else {
        return dog;
      }
    });
    this.setState({
      dogs: dogs,
    });
  };

  render() {
    return (
      <div className="App">
        <LikedDogs
          handleChangeOfHeart={this.handleLikeClick}
          dogs={this.state.dogs.filter((dogs) => dogs.status === "liked")}
        />
        <CenterContainer
          handleLikeClick={this.handleLikeClick}
          dogs={this.state.dogs.filter((dogs) => dogs.status === "undecided")}
        />
        <DislikedDogs
          handleChangeOfHeart={this.handleLikeClick}
          dogs={this.state.dogs.filter((dogs) => dogs.status === "disliked")}
        />
      </div>
    );
  }
}

export default App;
