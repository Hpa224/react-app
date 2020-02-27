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
  };

  increment = (event) => {
    const clicked = JSON.parse(event.target.dataset.clicked);
    if(clicked===false){
      console.log("Not clicked")
      event.target.dataset.clicked = "true";
      this.setState({score: this.state.score + 1 });
      this.randomize()
    }
    else {
      this.setState({score: 0 });
      this.setState({highscore: this.state.score });
      console.log("clicked")
    }

    };
    
  randomize = () => {
    this.setState((this.state.pictures = this.randomizer(this.state.pictures)));
    };
  
  randomizer = (array) => {
    var i, j, k;
    for (i = 0; i < array.length; i++) {
      j = Math.floor(Math.random() * 6);
      k = array[i];
      array[i] = array[j];
      array[j] = k;
      }
    return array;
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
            status={picture.status}
          />
        ))}
        </Wrapper>
    );
  }
}

export default App;