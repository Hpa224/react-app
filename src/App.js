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
    // console.log(pictures)
    this.condition(event)
    this.booleanupdate(event)
    this.randomize()

  };

  randomize = () => {
    this.setState(this.state.pictures = this.randomizer(this.state.pictures));
    // console.log(this.state.pictures)
  };
  
  condition (event) {
    let id = JSON.parse(event.target.dataset.id);

    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i].id == id && pictures[i].status == false ) {
        this.setState({score: this.state.score + 1 });
        console.log(`${pictures[i].name} was clicked`)
        console.log(`point gained`)
      }
      else if (pictures[i].id == id && pictures[i].status == true) {
        this.setState({highscore: this.state.score });
        this.setState({score: 0 });
        console.log(`${pictures[i].name} was clicked`)
        console.log("loss")
        // for (let j = 0; j < pictures.length; j++) {
        //   pictures[j].status=false
        // }
      }
    }
  }
  
  booleanupdate (event) {
    let id = JSON.parse(event.target.dataset.id);
    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i].id === id) {
        pictures[id].status = true;
      }
    }
  } 
  // used for testing new logic
  checker (event) {
    let id = JSON.parse(event.target.dataset.id);
    console.log(id)
    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i].id === id) {
        console.log(`${pictures[i].name} was clicked`)
      }
    }
    this.randomize() 
  }

  randomizer = (array) => {
    var i, j, k;
    for (i = 0; i < array.length; i++) {
      j = Math.floor(Math.random() * 12);
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
            status={picture.status}
            coolFunction={this.increment}
          />
        ))}
        </Wrapper>
    );
  }
}

export default App;