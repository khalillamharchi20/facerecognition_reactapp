import Navigation from "./components/navigation/Navigation";
import React, { Component, useState } from "react";
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

function App ()  {
const on_change =(event)=>{
  console.log(event.target.value)

}
const onbuttonsubmit=()=>{
  console.log('event')
}
const[input,setinput]=useState('')
  
  
  return (
    <div>
      <Particles className="start"
      params={param}
            />
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm onchange={on_change} onbuttonsubmit={onbuttonsubmit} />
      {/*
      <FaceRecognition />
      */}
    </div>
  );
    
}

export default App;
