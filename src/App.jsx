import { useState, useEffect } from 'react'
import './App.css'
// import * as THREE from 'three';

import hoverEffect from 'hover-effect'

function App() {

useEffect(() => {
const carnage =  new hoverEffect({
    parent: document.querySelector(".distortion"),
    intensity: 0.4,
    image1: "./src/assets/Carnage-kneeling.png",
    image2: "./src/assets/Carnage-standing.png",
    displacementImage: "./src/assets/fogDiss.png",
  });
} )


  return (
    <>
    <div className="landing">
        <div className="intro">
            <h1>Carnage</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor exercitationem voluptatum? Sit eius voluptatem magni odio sapiente, possimus, doloribus praesentium, consequatur dolores quas obcaecati qui aspernatur maiores hic mollitia.
            </p>
        </div>
      
        <div className="distortion" ></div>
    
    </div>
    </>
  )
}

export default App
