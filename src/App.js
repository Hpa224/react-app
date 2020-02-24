import React, { Component } from "react";
import Images from "./components/Images";
import pictures from "./pictures.json";
import Wrapper from "./components/Wrapper";





class App extends Component {
  state = {
    pictures
  };

  render() {
    return (
      <Wrapper>
        {this.state.pictures.map(picture => (
          <Images
            id={picture.id}
            name={picture.name}
            image={picture.image}
          />
        ))}
        </Wrapper>
    );
  }
}

export default App;