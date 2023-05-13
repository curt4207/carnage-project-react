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
          <h5>— Carnage</h5>
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
        <h6>by Curtis Clayton</h6>
        
    </>
  );
}

export default App;
