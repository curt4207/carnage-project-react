import { useState, useEffect, useRef } from 'react'
import './App.css'
import hoverEffect from 'hover-effect'

function App() {

  const container = useRef();

useEffect(() => {
  new hoverEffect({
    parent: container.current,
    intensity: 0.4,
    image1:  "/CarnageKneeling.png",
    image2: "/CarnageStanding.png",
    displacementImage: "/fogDiss.png",
  });
},[container] )


  return (
    <>
    <div className="landing">
        <div className="intro">
            <h1>Carnage</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolor exercitationem voluptatum? Sit eius voluptatem magni odio sapiente, possimus, doloribus praesentium, consequatur dolores quas obcaecati qui aspernatur maiores hic mollitia.
            </p>
        </div>
      
        <div
        className="parent"
        id="imgContainer"
        ref={container}
        style={{
          width: 600,
          height: 600,
        
        }}
      />
    
    </div>
    </>
  )
}

export default App
