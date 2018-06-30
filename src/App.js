import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"
import Bowser from "./images/bowser.png"
import Fox from "./images/fox.png"
import Ganon from "./images/ganon.png"
import Kirby from "./images/kirby.png"
import Link from "./images/link.jpg"
import Mario from "./images/mario.png"
import Ness from "./images/ness.png"
import Peach from "./images/peach.png"
import Samus from "./images/samus.png"
import Toad from "./images/toad.png"
import Yoshi from "./images/yoshi.jpg"
import Zelda from "./images/zelda.png"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an character to begin'
  };

  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "Bowser":
        return `${Bowser}`
      case "Fox":
        return `${Fox}`
      case "Ganon":
        return `${Ganon}`
      case "Kirby":
        return `${Kirby}`
      case "Link":
        return `${Link}`
      case "Marios":
        return `${Mario}`
      case "Ness":
        return `${Ness}`
      case "Peach":
        return `${Peach}`
      case "Samus":
        return `${Samus}`
      case "Toads":
        return `${Toad}`
      case "Yoshi":
        return `${Yoshi}`
      case "Zelda":
        return `${Zelda}`
      default:
        return `${Bowser}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
