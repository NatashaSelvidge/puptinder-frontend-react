import React, { Component } from "react";
import DogCard from "./DogCard";
import dogs from "./dogs-data";

class Dogs extends Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
    };
  }
  componentDidMount() {
    //fetch dogs...
    //.then r=>r.json
    //.then (dogs => this.setState{(dogs: dogs)})
    this.setState({
      dogs: dogs,
    });
  }
  render() {
    const dogCards = this.state.dogs.map((dog) => (
      <DogCard key={dog.id} dog={dog} />
    ));
    return <div>{dogCards}</div>;
  }
}

export default Dogs;
