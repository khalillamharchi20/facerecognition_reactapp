import Navigation from "./components/navigation/Navigation";
import React, { Component, useState } from "react";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkFrom/ImageLinkFrom";
import Rank from "./components/Rank/Rank";
import Particles from 'react-particles-js';
import { render } from "react-dom";
import Clarifai from 'clarifai'
import { func } from "prop-types";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIN from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
const app = new Clarifai.App({
  apiKey: 'e4abe20055a34d34aad0cd2bc6ce1317'
});
const param=  {
  particles: {
    number:{
      value: 100,
      density :{
        enable: true,
        value_area: 800
      }
    }
      
      
    }
  }

function App ()  {
const boxtracing=(data)=>{
  const location=document.getElementById("image1")
  const width=location.width
  const height=location.height
  return{
    leftcol : data.left_col * width,
    toprow : data.top_row * height,
    rightcol : width -(data.right_col * width),
    bottomrow : height -(data.bottom_row * height)
  }
}

const on_change =(event)=>{
  setinput(event.target.value)

}
const onbuttonsubmit=()=>{
  seturl(input)
  app.models.predict(
    Clarifai.FACE_DETECT_MODEL,
    url
  )
  .then(
    function(response){
      const data=response.outputs[0].data.regions[0].region_info.bounding_box
      const cst =boxtracing(data)
      setbox(cst)
      console.log(box)
      console.log(data)
    },
    function(err){

    }

  );
}
const onroutchange=(route)=>{
  setroute(route)
}
const[input,setinput]=useState('')
const[url,seturl]=useState('')
const[box,setbox]=useState({})
const[route,setroute]=useState('signin')
if(route==='signin'){
  return(
    <div>
      <Particles className="start" params={param}/>
      <Navigation onroutchange={onroutchange} route={route}  />
      <SignIN onroutchange={onroutchange}/>
    </div>
  );
}
else if(route==='home'){
  return(
    <div>
      <Particles className="start" params={param}/>
      <Navigation onroutchange={onroutchange} route={route}  />
      <Logo />
        <Rank/>
        <ImageLinkForm onchange={on_change} onbuttonsubmit={onbuttonsubmit} />
        <FaceRecognition url={url} box={box}/>
    </div>
  )
}
else{
  return(
  <div>
      <Particles className="start" params={param}/>
      <Navigation onroutchange={onroutchange} route={route}  />
      <Register onroutchange={onroutchange}/>
    </div>
  );

}
  
    
}

export default App;
