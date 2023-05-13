import { useState, useEffect, useRef } from "react";
import "./App.css";
import hoverEffect from "hover-effect";


function App() {
  const container = useRef();

  useEffect(() => {
    new hoverEffect({
      parent: container.current,
      intensity: 0.4,
      image1: "/CarnageKneeling.png",
      image2: "/CarnageStanding.png",
      displacementImage: "/Carnage_Main.jpg",
    });
    console.log( "Curtis Clayton GitHub","https://github.com/curt4207")
  }, [container]);

  return (
    <>
      <div className="landing">
        <div className="intro">
          <h1>Carnage</h1>
          <p>
            I was hollowed out inside... empty... just like my other. We were
            both sick... because we were incomplete... but not anymore. We
            healed each other... made each other whole. Neither one of us can
            survive without the other. Forget host. Forget symbiote. There is
            only Carnage.
          </p>
          <h4>— Carnage</h4>
        </div>

        <div
          className="parent"
          id="imgContainer"
          ref={container}
          style={{
            width: 650,
            height: 650,
            overflow: "hidden",
          }}
        />
      </div>
        <h5>
        by: Curtis Clayton
        <br />
         Mouse Over or On Mobile Tap Image
        </h5>
        
    </>
  );
}

export default App;
