import React, { useState, useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
// import * as THREE from "three"
import Formpage from "./Formpage";
import Videoplayer from "./Videoplayer";
function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [youtubelink, setyoutubelink] = useState({
    youtubelink: "",
    userinput: "",
  });
  const [startplayer, setstartplayer] = useState(false);
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
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff203a,
          color2: 0xff2020,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setyoutubelink((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handlesubmit = () => {
    if(youtubelink.youtubelink==''||youtubelink.userinput==''){
      alert("fill the link first")
    }else{

      setstartplayer(!startplayer);
    }
  };
  return (
    <div className="bg-slate-900 w-full h-screen" ref={myRef}>
      <div className="text-4xl text-white font-bold p-3 cursor-pointer" onClick={()=>setstartplayer(!startplayer)}>Shayata</div>
      <div className="w-full h-[90%] flex justify-center items-center flex-col ">
        {startplayer ? (
          <Videoplayer mainlink={youtubelink} setyoutubelink={setyoutubelink}/>
        ) : (
          <Formpage handlesubmit={handlesubmit} handlechange={handlechange} />
        )}
      </div>
    </div>
  );
}

export default App;
