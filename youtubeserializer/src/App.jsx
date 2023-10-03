import React, { useState, useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
// import * as THREE from "three"
function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          // THREE: THREE,
          el: myRef.current,
          mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xff203a,
  color2: 0xff2020
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  return (
    <div className="bg-slate-900 w-full h-screen" ref={myRef}>
      <div className="text-4xl text-white font-bold p-3">Shayata</div>
      <div className="w-full h-[90%] flex justify-center items-center flex-col">
        <div className="p-2  m-5 rounded-lg md:w-[70%] bg-slate-700 text-white">
          <p className="text-3xl md:text-4xl font-bold text-center">
            Stuck with searching particular content from a{" "}
            <span className="bg-red-600  my-5">YouTube video</span> here's
            solution for you!
          </p>
        </div>
        <input
          type="text"
          placeholder="Share your Youtube link here.."
          className="m-5 w-[80%] md:w-[70%] p-5 rounded-lg"
        />
        <input
          type="text"
          placeholder="What content you are looking for?."
          className="m-5 w-[80%] md:w-[70%] p-5 rounded-lg"
        />
        <button className="bg-slate-600 p-4 rounded-lg font-bold text-white">
          Generate Timestamp
        </button>
      </div>
    </div>
  );
}

export default App;
