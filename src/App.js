import Navigation from "./components/navigation/Navigation";
import React, { Component } from "react";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkFrom/ImageLinkFrom";
import Rank from "./components/Rank/Rank";
import Particles from 'react-particles-js';
import { render } from "react-dom";
const param=  {
  particles: {
    number:{
      value: 30,
      density :{
        enable: true,
        value_area: 800
      }
    }
      
      
    }
  }

class App  extends Component {
  
  render(){

  
  return (
    <div>
      <Particles className="start"
      params={param}
            />
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm />
      {/*
      <FaceRecognition />
      */}
    </div>
  );
    };
}

export default App;
