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
    clicked1:0,
    clicked2:0,
    clicked3:0,
    clicked4:0,
    clicked5:0,
    clicked6:0,
    clicked7:0,
    clicked8:0,
    clicked9:0,
    clicked10:0,
    clicked11:0,
    clicked12:0,
  };

  increment = (event) => {
    this.counterupdate(event)
    this.conditions()
    };

  randomize = () => {
    this.setState(this.state.pictures = this.randomizer(this.state.pictures));
    };
  
  counterupdate = (event) => {
    const clicked = JSON.parse(event.target.dataset.clicked);
    const id = JSON.parse(event.target.dataset.id);

    if (id===1) {
      this.setState({clicked1: this.state.clicked1 + 1 });
      console.log(`counter 1 is ${this.state.clicked1}`)
      console.log(`the score is ${this.state.score}`)
      }
    else if (id===2) {
      this.setState({clicked2: this.state.clicked2 + 1 });
      console.log(`counter 2 is ${this.state.clicked2}`)
      console.log(`the score is ${this.state.score}`)

      }
    else if (id===3) {  
      this.setState({clicked3: this.state.clicked3 + 1 });
      console.log(`counter 3 is ${this.state.clicked3}`)
      console.log(`the score is ${this.state.score}`)
      }
    else if (id===4) {  
      this.setState({clicked4: this.state.clicked4 + 1 });
      console.log(`counter 4 is ${this.state.clicked4}`)
      console.log(`the score is ${this.state.score}`)
      }
    else if (id===5) {  
      this.setState({clicked5: this.state.clicked5 + 1 });
      console.log(`counter 5 is ${this.state.clicked5}`)
      console.log(`the score is ${this.state.score}`)
      }
    else if (id===6) {  
      this.setState({clicked6: this.state.clicked6 + 1 });
      console.log(`counter 6 is ${this.state.clicked6}`)
      console.log(`the score is ${this.state.score}`)
      }
    else if (id===7) {  
      this.setState({clicked7: this.state.clicked7 + 1 });
      console.log(`counter 7 is ${this.state.clicked7}`)
      console.log(`the score is ${this.state.score}`)
      }
    else if (id===8) {  
      this.setState({clicked8: this.state.clicked8 + 1 });
      console.log(`counter 8 is ${this.state.clicked8}`)
      console.log(`the score is ${this.state.score}`)
      }
    else if (id===9) {  
      this.setState({clicked9: this.state.clicked9 + 1 });
      console.log(`counter 9 is ${this.state.clicked9}`)
      console.log(`the score is ${this.state.score}`)
      }
    else if (id===10) {  
      this.setState({clicked10: this.state.clicked10 + 1 });
      console.log(`counter 10 is ${this.state.clicked10}`)
      console.log(`the score is ${this.state.score}`)
      }
    else if (id===11) {  
      this.setState({clicked11: this.state.clicked11 + 1 });
      console.log(`counter 11 is ${this.state.clicked11}`)
      console.log(`the score is ${this.state.score}`)
      }
    else if (id===12) {  
      this.setState({clicked12: this.state.clicked12 + 1 });
      console.log(`counter 12 is ${this.state.clicked12}`)
      console.log(`the score is ${this.state.score}`)
      }
    }

    conditions = () => {
      if (this.state.clicked1 <= 1 && this.state.clicked2 <= 1 && this.state.clicked3 <= 1 && this.state.clicked4 <= 1 && this.state.clicked5 <= 1 &&this.state.clicked6 <= 1 &&this.state.clicked7 <= 1 &&this.state.clicked8 <= 1 && this.state.clicked9 <= 1 && this.state.clicked10 <= 1 &&this.state.clicked11 <= 1 && this.state.clicked12 <= 1) {
        console.log("point")
        this.randomize()
        this.setState({score: this.state.score + 1 });
        }
      else {
        this.setState({highscore: this.state.score });
        this.setState({score: 0 });
        console.log("lost")
        this.randomize()
        };
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
            coolFunction={this.increment}
            updater={this.counterupdate}
          />
        ))}
        </Wrapper>
    );
  }
}

export default App;