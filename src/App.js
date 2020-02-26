import React, { Component } from "react";
import Images from "./components/Images";
import pictures from "./pictures.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header"

class App extends Component {
  state = {
    pictures,
    score:0,
    highscore:0,
    clicked:[]
  };

  increment = (event) => {
    const clicked = JSON.parse(event.target.dataset.clicked);
    if(!clicked){
      console.log("Not clicked")
      event.target.dataset.clicked = "true";
    }
    else {
      console.log("clicked")
    }
    this.setState({score: this.state.score + 1 });
    };
  

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}></Header>
        {this.state.pictures.map(picture => (
          <Images
            id={picture.id}
            name={picture.name}
            image={picture.image}
            coolFunction={this.increment}
          />
        ))}
        </Wrapper>
    );
  }
}

export default App;